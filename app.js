(function () {
  "use strict";

  /* ---------- tiện ích ---------- */
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const nl = (s) => esc(s).replace(/\n/g, "<br>");

  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* bỏ qua */ } }
  };
  const KEY_STATE = (id) => "gai_state_" + id;
  const KEY_BEST = (id) => "gai_best_" + id;

  function shuffle(a) {
    const r = a.slice();
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  }

  const EXAMS = window.EXAMS;
  const examList = Object.keys(EXAMS).sort().map((k) => EXAMS[k]);

  let exam = null;   // đề đang làm
  let st = null;     // trạng thái
  let reviewMode = false; // xem lại sau khi nộp

  /* ---------- chấm điểm ---------- */
  function isAnswered(q, a) {
    if (a == null) return false;
    if (q.type === "single") return typeof a === "number";
    if (q.type === "multi") return a.length > 0;
    return a.length === (q.type === "yesno" ? q.rows.length : q.pairs.length) && a.every((x) => x != null);
  }
  function isCorrect(q, a) {
    if (!isAnswered(q, a)) return false;
    if (q.type === "single") return a === q.ans;
    if (q.type === "multi") return a.length === q.ans.length && q.ans.every((i) => a.includes(i));
    if (q.type === "yesno") return q.rows.every((r, i) => a[i] === r.a);
    return q.pairs.every((p, i) => a[i] === p.r);
  }
  function score() {
    let ok = 0;
    exam.questions.forEach((q, i) => { if (isCorrect(q, st.answers[i])) ok++; });
    return ok;
  }

  /* ---------- chuyển màn hình ---------- */
  function show(id) {
    ["home", "quiz", "result"].forEach((v) => $("#" + v).classList.toggle("hidden", v !== id));
    window.scrollTo(0, 0);
  }

  /* ---------- trang chủ ---------- */
  function renderHome() {
    exam = null; st = null; reviewMode = false;
    $("#topRight").innerHTML = "";
    const cards = examList.map((e) => {
      const saved = store.get(KEY_STATE(e.id));
      const best = store.get(KEY_BEST(e.id));
      const n = e.questions.length;
      let resume = "";
      if (saved && !saved.finished) {
        const done = Object.keys(saved.answers).length;
        resume = `<button class="btn" data-act="resume" data-id="${e.id}">Tiếp tục (${done}/${n})</button>`;
      } else if (saved && saved.finished) {
        resume = `<button class="btn" data-act="review" data-id="${e.id}">Xem lại kết quả</button>`;
      }
      return `
      <div class="card" data-exam="${e.id}">
        <h2>${esc(e.title)}</h2>
        <div class="meta">${esc(e.subtitle)} · ${n} câu${best != null ? ` · Điểm cao nhất: <b>${best}%</b>` : ""}</div>
        <div class="settings">
          <div class="seg">
            <label><input type="radio" name="mode-${e.id}" value="practice" checked> <span>Luyện tập (xem đáp án ngay)</span></label>
            <label><input type="radio" name="mode-${e.id}" value="exam"> <span>Thi thử (nộp bài mới xem)</span></label>
          </div>
          <label><input type="checkbox" id="sq-${e.id}"> Xáo trộn thứ tự câu hỏi</label>
          <label><input type="checkbox" id="sa-${e.id}"> Xáo trộn thứ tự đáp án</label>
        </div>
        <div class="row">
          <button class="btn primary" data-act="start" data-id="${e.id}">Bắt đầu làm bài</button>
          ${resume}
        </div>
      </div>`;
    }).join("");

    $("#home").innerHTML = `
      <h1>Luyện thi Generative AI</h1>
      <p class="lead">Chọn một đề để làm bài ngay trên web. Tiến độ được lưu tự động trên trình duyệt của bạn.</p>
      <div class="grid2">${cards}</div>`;
    show("home");
  }

  /* ---------- tạo trạng thái ---------- */
  function newState(e, opts) {
    const n = e.questions.length;
    let order = [...Array(n).keys()];
    if (opts.shuffleQ) order = shuffle(order);
    const perm = {};
    e.questions.forEach((q, i) => {
      if (q.type === "single" || q.type === "multi") {
        const p = [...q.opts.keys()];
        perm[i] = opts.shuffleA ? shuffle(p) : p;
      } else if (q.type === "match") {
        const r = [...new Set(q.pairs.map((p) => p.r).concat(q.extraRight || []))];
        perm[i] = shuffle(r); // luôn xáo để không lộ đáp án
      }
    });
    return { examId: e.id, mode: opts.mode, order, perm, answers: {}, checked: {}, cur: 0, finished: false };
  }
  function persist() { store.set(KEY_STATE(exam.id), st); }

  function startExam(id, resume) {
    exam = EXAMS[id];
    if (resume) {
      st = store.get(KEY_STATE(id));
    } else {
      const card = document.querySelector(`[data-exam="${id}"]`);
      const mode = card.querySelector(`input[name="mode-${id}"]:checked`).value;
      st = newState(exam, {
        mode,
        shuffleQ: card.querySelector("#sq-" + id).checked,
        shuffleA: card.querySelector("#sa-" + id).checked
      });
      persist();
    }
    reviewMode = false;
    renderQuiz();
  }

  /* ---------- render câu hỏi ---------- */
  function questionBody(qi, reveal) {
    const q = exam.questions[qi];
    const a = st.answers[qi];
    let html = "";
    if (q.image) html += `<img class="qimg" src="${esc(q.image)}" alt="Hình minh họa của câu hỏi">`;

    if (q.type === "single" || q.type === "multi") {
      const multi = q.type === "multi";
      if (multi) html += `<div class="qhint">Chọn ${q.ans.length} đáp án.</div>`;
      html += `<div class="opts">` + st.perm[qi].map((oi) => {
        const sel = multi ? (a || []).includes(oi) : a === oi;
        let cls = "opt " + q.type + (sel ? " selected" : "");
        if (reveal) {
          const right = multi ? q.ans.includes(oi) : q.ans === oi;
          if (right) cls = "opt " + q.type + " correct";
          else if (sel) cls = "opt " + q.type + " wrong";
        }
        return `<button type="button" class="${cls}" data-oi="${oi}" ${reveal ? "disabled" : ""}><span class="mark"></span><span>${esc(q.opts[oi])}</span></button>`;
      }).join("") + `</div>`;
    }

    if (q.type === "yesno") {
      html += `<div class="tablewrap"><table class="yn"><thead><tr><th style="width:auto"></th><th>Yes</th><th>No</th></tr></thead><tbody>` +
        q.rows.map((r, i) => {
          const v = a ? a[i] : null;
          const cell = (val) => {
            let c = "c";
            if (reveal) {
              if (r.a === val) c += " right";
              else if (v === val) c += " bad";
            }
            return `<td class="${c}"><input type="radio" name="yn${i}" data-row="${i}" data-val="${val}" ${v === val ? "checked" : ""} ${reveal ? "disabled" : ""}></td>`;
          };
          return `<tr><td>${nl(r.s)}</td>${cell(true)}${cell(false)}</tr>`;
        }).join("") + `</tbody></table></div>`;
    }

    if (q.type === "match") {
      html += `<div class="qhint">Chọn đáp án phù hợp cho từng mục.</div><div class="match">` +
        q.pairs.map((p, i) => {
          const v = a ? a[i] : null;
          let cls = "mrow";
          let extra = "";
          if (reveal) {
            if (v === p.r) cls += " right";
            else { cls += " bad"; extra = `<div class="ans">Đáp án đúng: ${esc(p.r)}</div>`; }
          }
          const options = `<option value="">— Chọn —</option>` + st.perm[qi].map((r) =>
            `<option value="${esc(r)}" ${v === r ? "selected" : ""}>${esc(r)}</option>`).join("");
          return `<div class="${cls}"><div>${nl(p.l)}</div><select data-row="${i}" ${reveal ? "disabled" : ""}>${options}</select>${extra}</div>`;
        }).join("") + `</div>`;
    }
    return html;
  }

  function renderQuiz() {
    const n = exam.questions.length;
    const pos = st.cur;
    const qi = st.order[pos];
    const q = exam.questions[qi];
    const a = st.answers[qi];
    const practice = st.mode === "practice";
    const reveal = reviewMode || (practice && st.checked[qi]);
    const correct = isCorrect(q, a);
    const answeredCount = Object.keys(st.answers).filter((k) => isAnswered(exam.questions[k], st.answers[k])).length;

    $("#topRight").innerHTML = `<button class="btn small" id="btnHome">Trang chủ</button>`;

    const pal = st.order.map((idx, p) => {
      const qq = exam.questions[idx];
      const done = isAnswered(qq, st.answers[idx]);
      let cls = "pal";
      if (reviewMode || (practice && st.checked[idx])) cls += isCorrect(qq, st.answers[idx]) ? " ok" : " bad";
      else if (done) cls += " answered";
      if (p === pos) cls += " cur";
      return `<button class="${cls}" data-go="${p}" aria-label="Câu ${p + 1}">${p + 1}</button>`;
    }).join("");

    let explain = "";
    if (reveal) {
      explain = `<div class="explain ${correct ? "ok" : "bad"}"><b class="v">${correct ? "Chính xác!" : "Chưa đúng."}</b>${nl(q.exp || "")}</div>`;
    }
    const note = q.note ? `<div class="explain" style="margin:0 0 12px"><span class="badge warn">Lưu ý</span>${esc(q.note)}</div>` : "";

    const isLast = pos === n - 1;
    let actions = `<button class="btn" id="btnPrev" ${pos === 0 ? "disabled" : ""}>← Trước</button>`;
    if (practice && !reviewMode && !st.checked[qi]) {
      actions += `<button class="btn primary" id="btnCheck" ${isAnswered(q, a) ? "" : "disabled"}>Kiểm tra</button>`;
    }
    actions += `<button class="btn" id="btnNext" ${isLast ? "disabled" : ""}>Tiếp →</button><span class="spacer"></span>`;
    actions += reviewMode
      ? `<button class="btn primary" id="btnBackResult">Về kết quả</button>`
      : `<button class="btn ${isLast ? "primary" : ""}" id="btnFinish">Nộp bài</button>`;

    $("#quiz").innerHTML = `
      <div class="card">
        <div class="qhead">
          <div><span class="badge">${practice ? "Luyện tập" : "Thi thử"}${reviewMode ? " · Xem lại" : ""}</span><b>Câu ${pos + 1} / ${n}</b></div>
          <div class="meta" style="margin:0">Đã trả lời: ${answeredCount}/${n}</div>
        </div>
        <div class="progress"><div style="width:${((pos + 1) / n) * 100}%"></div></div>
        ${note}
        <p class="qtext">${nl(q.q)}</p>
        <div id="qbody">${questionBody(qi, reveal)}</div>
        ${explain}
        <div class="nav">${actions}</div>
      </div>
      <div class="card"><b>Danh sách câu hỏi</b><div class="palette">${pal}</div></div>`;
    show("quiz");
  }

  /* ---------- sự kiện trong quiz ---------- */
  function setAnswer(qi, val) { st.answers[qi] = val; persist(); }

  function onQuizClick(e) {
    const t = e.target;
    const qi = st.order[st.cur];
    const q = exam.questions[qi];

    const opt = t.closest(".opt");
    if (opt && !opt.disabled) {
      const oi = Number(opt.dataset.oi);
      if (q.type === "single") setAnswer(qi, oi);
      else {
        const cur = (st.answers[qi] || []).slice();
        const k = cur.indexOf(oi);
        if (k >= 0) cur.splice(k, 1); else cur.push(oi);
        setAnswer(qi, cur);
      }
      return renderQuiz();
    }

    const go = t.closest("[data-go]");
    if (go) { st.cur = Number(go.dataset.go); persist(); return renderQuiz(); }

    const id = t.closest("button") && t.closest("button").id;
    if (id === "btnPrev" && st.cur > 0) { st.cur--; persist(); renderQuiz(); }
    else if (id === "btnNext" && st.cur < exam.questions.length - 1) { st.cur++; persist(); renderQuiz(); }
    else if (id === "btnCheck") { st.checked[qi] = true; persist(); renderQuiz(); }
    else if (id === "btnFinish") finish();
    else if (id === "btnBackResult") renderResult();
    else if (id === "btnHome") renderHome();
  }

  function onQuizChange(e) {
    const t = e.target;
    const qi = st.order[st.cur];
    const q = exam.questions[qi];
    if (q.type === "yesno" && t.matches("input[type=radio]")) {
      const cur = (st.answers[qi] || new Array(q.rows.length).fill(null)).slice();
      cur[Number(t.dataset.row)] = t.dataset.val === "true";
      setAnswer(qi, cur);
      renderQuiz();
    } else if (q.type === "match" && t.matches("select")) {
      const cur = (st.answers[qi] || new Array(q.pairs.length).fill(null)).slice();
      cur[Number(t.dataset.row)] = t.value || null;
      setAnswer(qi, cur);
      renderQuiz();
    }
  }

  function finish() {
    const n = exam.questions.length;
    const unanswered = exam.questions.filter((q, i) => !isAnswered(q, st.answers[i])).length;
    if (unanswered > 0 && !confirm(`Bạn còn ${unanswered}/${n} câu chưa trả lời đầy đủ. Vẫn nộp bài?`)) return;
    st.finished = true;
    const pct = Math.round((score() / n) * 100);
    const best = store.get(KEY_BEST(exam.id));
    if (best == null || pct > best) store.set(KEY_BEST(exam.id), pct);
    persist();
    renderResult();
  }

  /* ---------- kết quả ---------- */
  let filter = "all";
  function renderResult() {
    reviewMode = false;
    const n = exam.questions.length;
    const ok = score();
    const pct = Math.round((ok / n) * 100);
    $("#topRight").innerHTML = `<button class="btn small" id="btnHome2">Trang chủ</button>`;

    const items = st.order.map((qi, p) => {
      const good = isCorrect(exam.questions[qi], st.answers[qi]);
      if (filter === "bad" && good) return "";
      const first = exam.questions[qi].q.split("\n")[0];
      return `<button class="ritem ${good ? "ok" : "bad"}" data-review="${p}"><span class="n">${p + 1}</span><span class="t">${esc(first)}</span><span>${good ? "✓ Đúng" : "✕ Sai"}</span></button>`;
    }).join("");

    $("#result").innerHTML = `
      <div class="card">
        <span class="badge">${esc(exam.title)}</span>
        <div class="score ${pct >= 70 ? "pass" : "fail"}">${pct}%</div>
        <div class="meta">Đúng ${ok}/${n} câu · Mốc tham khảo: 70%</div>
        <div class="row">
          <button class="btn primary" id="btnRetry">Làm lại đề này</button>
          <button class="btn" id="btnWrong">${filter === "bad" ? "Hiện tất cả câu" : "Chỉ xem câu sai"}</button>
        </div>
      </div>
      <div class="card"><b>Chi tiết từng câu</b> <span class="meta">(bấm để xem đáp án và giải thích)</span>
        <div class="rlist">${items || '<div class="meta">Không có câu sai nào, tuyệt vời! 🎉</div>'}</div>
      </div>`;
    show("result");
  }

  function onResultClick(e) {
    const t = e.target;
    const rv = t.closest("[data-review]");
    if (rv) { reviewMode = true; st.cur = Number(rv.dataset.review); return renderQuiz(); }
    const id = t.closest("button") && t.closest("button").id;
    if (id === "btnRetry") {
      const card = { mode: st.mode };
      st = newState(exam, { mode: card.mode, shuffleQ: false, shuffleA: false });
      persist(); filter = "all"; renderQuiz();
    } else if (id === "btnWrong") { filter = filter === "bad" ? "all" : "bad"; renderResult(); }
    else if (id === "btnHome2") renderHome();
  }

  function onHomeClick(e) {
    const b = e.target.closest("button[data-act]");
    if (!b) return;
    const id = b.dataset.id;
    if (b.dataset.act === "start") {
      const saved = store.get(KEY_STATE(id));
      if (saved && !saved.finished && !confirm("Đề này đang làm dở. Bắt đầu lại sẽ xóa tiến độ cũ. Tiếp tục?")) return;
      startExam(id, false);
    } else if (b.dataset.act === "resume") startExam(id, true);
    else if (b.dataset.act === "review") {
      exam = EXAMS[id]; st = store.get(KEY_STATE(id)); filter = "all"; renderResult();
    }
  }

  /* ---------- khởi động ---------- */
  $("#home").addEventListener("click", onHomeClick);
  $("#quiz").addEventListener("click", onQuizClick);
  $("#quiz").addEventListener("change", onQuizChange);
  $("#result").addEventListener("click", onResultClick);
  $("#brand").addEventListener("click", (e) => { e.preventDefault(); renderHome(); });
  $("#topRight").addEventListener("click", (e) => {
    if (e.target.closest("button")) renderHome();
  });

  renderHome();
})();
