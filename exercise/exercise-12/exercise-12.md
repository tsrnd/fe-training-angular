# Bài tập 12
## Routing & Navigation
### Yêu cầu:
1. Tạo component cho `account`, trong component này có 2 component con là `profile` và `dashboard`
  * Chức năng:
    - Khai báo route cho 3 component này
    - Dùng những Guards sau đây để bảo vệ cho những route này:
      + `canActivate`: bảo vệ cho route `account`
      + `canActivateChild`: bảo vệ cho route con
      + `canDeactivate`: bảo vệ chuyển hướng cho  trang profile
    - Dùng `resolve` để lấy data trước khi vào component cho route `profile`, có thể tạo json ở assets để gọi vào hoặc dùng `https://reqres.in/`
2. Tạo component cho `auth`, trong compoent này có 2 component con là `login` và `register`
  * Chức năng: 
    - Khai báo route cho 3 component này
    - Kết hợp với service `auth` để xử lý login và chuyển hướng trang.
3. Tạo 1 service `auth` để các component trên check login or not.
