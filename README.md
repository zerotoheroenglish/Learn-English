# Học Tiếng Anh

App học tiếng Anh miễn phí cho người Việt, từ A1 đến C1. Không quảng cáo, không cần tài khoản.

**Dùng ngay:** https://zerotoheroenglish.github.io/Learn-English/

Trên điện thoại, mở link bằng Safari (iPhone) hoặc Chrome (Android), rồi chọn **Thêm vào Màn hình chính** để dùng như một app, kể cả khi không có mạng.

## Có gì trong app

| Tab | Nội dung |
|---|---|
| **Today** | Việc cần làm hôm nay, chuỗi ngày học, lộ trình theo trình độ |
| **Learn** | Từ vựng theo cấp độ, ngữ pháp, động từ bất quy tắc |
| **Practice** | Phát âm (bảng IPA, chấm phát âm), Shadowing với video, nghe, đọc, viết, nói chuyện với AI |
| **Review** | Thẻ ôn lặp lại ngắt quãng (gõ đáp án để nhớ lâu), sổ lỗi, bài tập ngữ pháp, luyện dịch, đặt câu hỏi |
| **Translate** | Dịch Anh ⇄ Việt và sửa lỗi câu |

## Tiến độ và tài khoản

- Không đăng nhập vẫn dùng được đầy đủ. Tiến độ lưu ngay trên máy (localStorage và một bản dự phòng IndexedDB).
- Đăng nhập (Google hoặc email) chỉ để đồng bộ giữa nhiều thiết bị. Tiến độ trên máy được gộp vào tài khoản, không bị ghi đè.
- Khi đăng xuất, bạn tự chọn giữ hay xoá tiến độ trên máy.
- Có thể tải file sao lưu `.json` trong mục **👤 Tài khoản**.

## Kỹ thuật

- HTML, CSS và JavaScript thuần, không cần build. Chạy được trên GitHub Pages.
- PWA: `sw.js` lưu sẵn app để dùng offline; `manifest.json` cho biểu tượng màn hình chính.
- Firebase Authentication và Firestore để đồng bộ. Quy tắc bảo mật ở `firestore.rules`: mỗi người chỉ đọc và ghi được tài liệu `users/{uid}` của chính mình; góp ý ai cũng gửi được nhưng chỉ chủ app đọc được.
- Video phát qua trình phát nhúng chính thức của YouTube, mỗi video ghi rõ tên kênh và link gốc.

```
index.html      giao diện, điều hướng, trang Điều khoản
app.css         toàn bộ giao diện
js/             mã theo từng tab (app-core, app-sync, app-review, tab-shadowing…)
data/           dữ liệu tải theo nhu cầu
am-mau/         âm mẫu
sw.js           service worker (đổi tên CACHE mỗi lần phát hành)
```

Chạy thử trên máy: `python3 -m http.server` trong thư mục này rồi mở http://localhost:8000.

## Nguồn video

- [BBC Learning English](https://www.youtube.com/@bbclearningenglish): bảng IPA, loạt *English Pronunciation Tips*
- [Listening Time](https://www.youtube.com/playlist?list=PLhNRdHEdUQewzYZ0X6gt3x9_CVen_HldI): A1 English Listening Practice
- [Miss Honey · Slow English Podcast](https://www.youtube.com/@Slow_English_Podcast): khoá A1 và A2

App không tải, không lưu và không sao chép video, và không liên kết với các kênh trên. Chủ sở hữu nội dung muốn gỡ bỏ, vui lòng gửi qua nút **💬 Gửi góp ý** trong app.

## Góp ý

Dùng nút **💬 Gửi góp ý** ở cuối app (không cần đăng nhập).
