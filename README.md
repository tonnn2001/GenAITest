# Luyện thi GMetrix – Generative AI

Web làm bài thi thử (Practice Exam 1 & 2, mỗi đề 45 câu) chạy hoàn toàn trên trình duyệt, không cần server.

## Tính năng
- 2 đề thi, đủ các dạng: 1 đáp án, nhiều đáp án, Yes/No, ghép cặp (thay cho kéo-thả/dropdown)
- Chế độ **Luyện tập** (kiểm tra từng câu + giải thích) và **Thi thử** (nộp bài mới xem kết quả)
- Xáo trộn câu hỏi / đáp án, lưu tiến độ và điểm cao nhất bằng localStorage
- Xem lại từng câu sau khi nộp, lọc các câu sai
- Giao diện responsive, tự đổi sáng/tối

## Chạy thử trên máy
```bash
python3 -m http.server 8000
# mở http://localhost:8000
```

## Đưa lên GitHub Pages
```bash
git init
git add .
git commit -m "GMetrix Generative AI practice exams"
git branch -M main
git remote add origin https://github.com/<ten-ban>/<ten-repo>.git
git push -u origin main
```
Sau đó vào **Settings → Pages → Build and deployment**, chọn **Deploy from a branch**, branch `main`, thư mục `/ (root)` → **Save**.
Sau 1–2 phút web có địa chỉ `https://<ten-ban>.github.io/<ten-repo>/`.

## Cấu trúc
```
index.html
css/style.css
js/app.js          # logic làm bài
data/helpers.js    # hàm tạo câu hỏi S/M/Y/X
data/exam1.js      # dữ liệu đề 1
data/exam2.js      # dữ liệu đề 2
img/               # ảnh dùng trong câu hỏi
```

## Sửa / thêm câu hỏi
Mở `data/exam1.js` hoặc `data/exam2.js`, ví dụ:
```js
S("Câu hỏi?", ["A", "B", "C", "D"], 2, "Giải thích")        // 1 đáp án (đáp án đúng là C)
M("Chọn hai", ["A", "B", "C", "D"], [0, 3], "Giải thích")   // nhiều đáp án
Y("Yes/No", [["Nhận định 1", true], ["Nhận định 2", false]], "Giải thích")
X("Ghép cặp", [["Vế trái 1", "Vế phải 1"], ["Vế trái 2", "Vế phải 2"]], "Giải thích")
```

## Lưu ý
Nội dung được chép lại từ file PDF practice exam để học cá nhân. Một vài câu kéo-thả trong PDF không hiện đủ các mục
nên được dựng lại từ phần giải thích (những câu này có nhãn "Lưu ý" trong web). Hãy đối chiếu với tài liệu gốc khi cần.
