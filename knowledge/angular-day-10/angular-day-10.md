# FORMS (Template-driven)
## Triển khai với Template-driven Form
### 1. Các yêu cầu khi làm với Template-driven Form
  - Import `FormsModule` vào module quản lý của component cần dùng, hiện tại module quản lý của chúng ta đó là `app-module`.
  - Import những features của angular forms bên trong component như bên dưới: 
    ```
    // Lưu ý cái nào cần dùng để handle thì mình import thêm vào.
    import { NgForm } from '@angular/forms';
    ```
    
### 2. Khai báo form với template component
```
<form #login="ngForm" (ngSubmit)="onSubmit(login)">
    <div class="form-group">
      <label>Email</label>
      <input type="text" #validEmail="ngModel" class="form-control" [(ngModel)]="email" name="email" required maxlength="20" (ngModelChange)="onEmail($event)">
      <ng-container *ngIf="validEmail.invalid && (validEmail.dirty && validEmail.touched)">
        <p *ngIf="validEmail.errors.required">Field is required</p>
      </ng-container>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" [(ngModel)]="password" name="password">
    </div>
    <div class="form-group mb-3" ngModelGroup="address">
      <label for="">Address</label>
      <div class="row">
        <div class="col-md-6">
          <input class="form-control" type="text" ngModel name="street">
        </div>
        <div class="col-md-6">
          <input class="form-control" type="text" ngModel name="city">
        </div>
      </div>
    </div>
    <div class="buttons-set">
      <button class="btn btn-primary" [disabled]="login.invalid">Submit</button>
    </div>
  </form>
  ```
  * Chi tiết về ví dụ trên:
    - `#login="ngForm"`: Tạo variable với ngForm (form group)
    - `(ngSubmit)="onSubmit(login)">`: Event submit form
    - `ngModel`: đại diện cho form control có 3 cách dùng cho ngModel
        1. `ngModel`: Kiểu bình thường dùng để khai báo form control
        2. `[ngModel]`: kiểu property binding (1-way)
        3. `[(ngModel)]`: 2-way binding
    - `ngModelGroup`: tạo mới 1 form group cấp con
    - `(ngModelChange)`: Event để lắng nghe sự thay đổi của input và lấy value.
    - `validators`: dùng những attribute validate của html, ngoài ra chúng ta có thể custom thêm attribute validate cho template-driven form, tham khảo thêm trên docs form của angular.

> Trên đây là những cái mà chúng ta sẽ thường gặp. mọi người muốn tìm hiểu thêm thì lên trang docs của angular nhé.
