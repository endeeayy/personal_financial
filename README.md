# Personal Financial
Ứng dụng quản lí tài chính, thống kê thu chi cá nhân phát triển trên nền tảng web.

## Mục lục
1. [Giới thiệu](#gthieu)
2. [Triển khai](#trkhai)
3. [Phụ lục](#phluc)
4. [Cài đặt](#caidat)

<a name="gthieu"> </a>
## 1. Giới thiệu chung
### 1.1. Bài toán
- Trong bối cảnh nền kinh tế - xã hội loài người gặp nhiều khó khăn, biến cố do đại dịch Covid-19 hoành hành, vấn đề tài chính của mỗi cá nhân, hộ gia đình, các doanh nghiệp, tổ chức lớn được coi là một nỗi lo hàng đầu ở thời điểm hiện tại. Các chính sách đóng cửa/hạn chế biên giới trên đất liền, biển đảo hay là cả đường hàng không đang có những tác động tiêu cực mạnh mẽ đến tình hình kinh tế của toàn bộ người dân. Mặt khác, các biện pháp cách ly tại khu tập trung và cách ly tại hộ gia đình cũng đang khiến cho nguồn thu tiền tệ của người dân gặp nhiều khó khăn, thách thức.

- Để có thể vừa đáp ứng được các tiêu chuẩn về y tế, dịch tễ, cách ly xã hội mà vẫn không làm kiệt quệ ngân sách của mình, bản thân mỗi chúng ta cần học cách thống kê chi tiết tình trạng thu – chi tài chính cá nhân, lên kế hoạch cho các khoản tiền mua/bán một cách khoa học.

- Nhận biết tầm quan trọng của những vấn đề trên, nhóm chúng tôi lên kế hoạch xây dựng một ứng dụng quản lý tài chính, thống kê trên nền tảng web.

### 1.2. Công nghệ sử dụng
- Git - Github: Là một hệ thống quản lí mã nguồn tập trung thông qua các phiên bản phân tán trên các máy trạm của thành viên.

- ReactJS: Là một thư viện phát triển phía client vô cùng đa dụng, tùy biến tốt, chạy trên nền tảng ngôn ngữ JavaScript.

- Python: Là một ngôn ngữ lập trình bậc cao dùng cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991. Python được thiết kế với ưu điểm mạnh là dễ đọc, dễ học và dễ nhớ. Python là ngôn ngữ có hình thức rất sáng sủa, cấu trúc rõ ràng, thuận tiện cho người mới học lập trình. 

- Typescript: Là một ngôn ngữ lập trình được phát triển và duy trì bởi Microsoft. Nó là một tập hợp siêu cú pháp nghiêm ngặt của JavaScript và thêm tính năng kiểu tĩnh tùy chọn vào ngôn ngữ. TypeScript được thiết kế để phát triển các ứng dụng lớn và chuyển đổi sang JavaScript.

- Django: Là một Framework lập trình Web bậc cao, mã nguồn mở được viết bằng Ngôn ngữ lập trình Python.

- SQLite: Là một thư viện phần mềm mà triển khai một SQL Database Engine, không cần máy chủ, không cần cấu hình, khép kín và nhỏ gọn. Nó là một cơ sở dữ liệu, không cần cấu hình, có nghĩa là giống như các cơ sở dữ liệu khác mà bạn không cần phải cấu hình nó trong hệ thống của mình.

- RESTful API: Là một tiêu chuẩn dùng trong việc thết kế các thiết kế API cho các ứng dụng web để quản lý các resource. RESTful là một trong những kiểu thiết kế API được sử dụng phổ biến nhất ngày nay.

- Visual Studio Code: Là một phần mềm soạn thảo code phát triển rất tích cực với sự hỗ trợ của Microsoft. Các tài liệu chính thức được duy trì tốt.

- Ant Design: Là một Framework dành cho thiết kế React UI với nhiều Component đẹp, đa dụng, đa dạng, dễ dàng tùy chỉnh, và đã được viết sẵn giúp giảm thiểu thời gian thiết kế các component.

- NPM: Là công cụ tạo và quản lí các thư viện lập trình JavaScript trên môi trường Node.js.

<a name="trkhai"> </a>
## 2. Triển khai
### 2.1. Mục tiêu phần mềm
- Xây dựng một ứng dụng quản lý tài chính, thống kê trên nền tảng web với các chức năng chính như:
	- Đăng nhập/đăng xuất để bảo mật thông tin cá nhân người dùng.
	- Thống kê các khoản thu – chi (thêm/sửa/xóa).
	- Cung cấp đa dạng các danh mục tiêu dùng, hỗ trợ cho việc ghi chú thông minh.
	- Cung cấp biểu đồ đánh giá tổng quan các khoản thu – chi và đánh giá tương tác giữa ngân sách dành cho thu và chi.
	- Cung cấp bảng kế hoạch chi tiêu khách quan, khoa học.
	- Một số tính năng phụ khác đang cập nhật thêm…

<a name="phluc"> </a>
## 3. Phụ lục
### 3.1. Thành viên:
- [Ngô Duy Anh (MSV: 18001093):](https://www.facebook.com/anh.duy.11/)
	- Xây dựng front-end.
	- Testing, tìm bug và fix bug.

- [Nguyễn Đình Tuấn Anh (MSV: 18001094):](https://www.facebook.com/rekt.anh/)
	- Tạo Github project, lên kế hoạch xây dựng phần mềm, phân chia công việc cụ thể.
	- Nghiên cứu và quyết định các công nghệ sử dụng.
	- Xây dựng front-end.
	- Tổng hợp thông tin, viết báo cáo.

- [Tạ Quang Đức (MSV: 18001117):](https://www.facebook.com/duc.ta.14473)
	- Xây dựng Database sử dụng SQLite và Django.
	- Xây dựng RESTful API.

<a name="caidat"> </a>
## 4. Cài đặt
***Máy cần cài đặt Node.js để có thể sử dụng được phần mềm***

1. Download ứng dụng [Personal Financial]()
2. Giải nén file
3. Điều hướng đến đường dẫn `[cd backend]`
4. Cài đặt virtualenv nếu máy chưa cài đặt `[pip install virtualenv]`
5. Tạo môi trường ảo `[virtualenv env]`
6. Kích hoạt môi trường
	- Linux `[source env/bin/activate]`
	- Windows `[env/script/activate.bat]`
7. Cài đặt các dependencies `[pip install -r requirements.txt]`
8. Điều hướng đến đường dẫn frontend `[cd ../frontend]`
9. Cài đặt các dependencies `[npm install]`

Tiếp theo để chạy phần mềm làm như sau:

*Mở 2 Powershell: 1 Powershell điều hướng đến thư mục back end, 1 Powershell điều hướng đến thư mục frontend*

<a name="b1"> </a>
1. Powershell thứ nhất ở backend chạy:
	- `[python manage.py migrate]`
	- `[python manage.py createsuperuser]` (điền thông tin)
	- `[python manage.py runserver]`
2. Powershell thứ hai ở frontend chạy: 
	- `[npm start]`

Sau khi vào được ứng dụng thì tiến hành đăng nhập bằng user đã tạo ở [bước 1](#b1) và sử dụng.

*Trong trường hợp xảy ra vấn đề trong quá trình cài đặt và sử dụng, vui lòng [liên hệ](https://www.facebook.com/duc.ta.14473) để được giải đáp và hướng dẫn. Xin cảm ơn!*

