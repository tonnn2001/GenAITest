// Helper tạo câu hỏi cho gọn
window.EXAMS = window.EXAMS || {};

// Trắc nghiệm 1 đáp án: ans = chỉ số đáp án đúng
window.S = (q, opts, ans, exp, extra) => Object.assign({ type: "single", q, opts, ans, exp }, extra);

// Trắc nghiệm nhiều đáp án: ans = mảng chỉ số đúng
window.M = (q, opts, ans, exp, extra) => Object.assign({ type: "multi", q, opts, ans, exp }, extra);

// Yes/No theo từng dòng: rows = [[nội dung, true|false], ...]
window.Y = (q, rows, exp, extra) =>
  Object.assign({ type: "yesno", q, rows: rows.map(r => ({ s: r[0], a: r[1] })), exp }, extra);

// Ghép cặp (thay cho kéo-thả / dropdown): pairs = [[vế trái, vế phải đúng], ...]
// extraRight = các lựa chọn gây nhiễu thêm (nếu có)
window.X = (q, pairs, exp, extra, extraRight) =>
  Object.assign({ type: "match", q, pairs: pairs.map(p => ({ l: p[0], r: p[1] })), extraRight: extraRight || [], exp }, extra);
