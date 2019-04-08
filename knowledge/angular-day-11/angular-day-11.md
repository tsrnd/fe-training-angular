# Routing and navigation
## 1. Router imports
```
import { RouterModule, Routes } from '@angular/router';
```

## 2. Configuration
```
const appRoutes: Routes = [
  { 
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'home-child',
        component: HomeChildComponent
      }
    ]
  },
  { 
    path: 'news',
    component: NewsComponent
  },
  { 
    path: 'news/:id',
    component: NewsDetailComponent
  },
  { 
    path: 'hero',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule { }
```
* Giải thích những config trên
  - Để khai báo route cho 1 trang ta cần phải khai 2 thuộc tính đó là `path` và `component`.
  - `children`: là route con
  - `:id`: là route động và không cố định path (vd: `news/1, news/2, ...`), thường được dùng cho những trang chi tiết.
  - `**`: dành cho trang not found, trong trường hợp ta gỏ sai đường dẩn.
  - `redirectTo`: Dùng cho trường hợp chuyển hướng trang, ví dụ trên là khi người dùng chuyển hướng đến path `hero` thì nó sẽ tự động redirect đên trang `heroes`
  - Trong `RouterModule` for 2 method là `forRoot` vs `forChild`
    + `forRoot`: Nên dùng cho app-root nếu dùng route child sẽ bị lổi
    + `forChild`: Dùng cho config route child

## 3. Router outlet
  - `<router-outlet></router-outlet>` là 1 directive component được cung cấp bởi thư viện RouteModule, dùng để đánh dấu vị trí cho nơi mà component phù hợp với route sẽ output ra tại đây và nó sẽ nằm bên dưới của outlet.

## 4. Router links
  - Dùng directive `routerLink` để chuyển hướng giữa các trang thay vì dùng `href`, nếu dùng `href` thì trang sẽ load lại còn `routerLink` thì không. Xem ví dụ dưới
  ```
    <a routerLink="/News"  routerLinkActive="active">News</a>
  ```
## 5. Active router links
  - Để thêm class active phù hợp với đường dẩn ta dùng directive `routerLinkActive`. Xem ví dụ dưới:
  ```
    <a routerLink="/news" routerLinkActive="active">News</a>
  ```
  - Nếu muốn dùng cho đường dẩn chính xác tuyệt đối thì ta kèm theo option là `[routerLinkActiveOptions]="{ exact: true }`. Chổ này ta thường dùng cho trang chủ

## 6. Activated route
  - Activated route giúp ta get thông tin từ route như:
    + `data`: lấy data từ route config
    + `paramMap`: lấy data từ route `:id`
    + `queryParamMap`: lấy data từ param trên route, vd: `?key=value`
    + ... đọc thêm trên docs
  - Ở phần này chú ý 2 method `paramMap` vs `queryParamMap` là của phiên bản mới, ta nên dùng 2 method này thay vì dùng phiên bản củ là `params` vs `queryParams`
  - Để làm việc với active route ta cần import `ActivatedRoute`
    ```
      import { ActivatedRoute } from '@angular/router';
      ...
      export class AccountComponent implements OnInit {
        constructor(
          private activateRoute: ActivatedRoute
        ) { }

        ngOnInit() {
          this.activateRoute.paramMap.subscribe(data => console.log(data));
          this.activateRoute.data.subscribe(data => console.log(data));
        }
      }
    ```

## 7. Router events
  - Router events cung cấp cho ta cycle hook của route từ lúc bắt đầu chuyển hướng đến khi kết thúc, và chúng ta kiêm tra bằng cách sau:
  ```
    constructor(
      private router: Router
    ) {

    }

    ngOnInit() {
      this.router.events.subscribe((data) => {
        if (data instanceof NavigationStart) {
          window.scrollTo(0, 0);
          this.auth.checkLogged();
        }
      });
    }
  ```
  - Ở ví dụ trên ta dùng cho trường hợp mổi khi có dấu hiệu chuyển ra sẽ move lên top của trang
  - `NavigationStart` là 1 trong những cycle của router event ngoài ta còn nhiều những cái khác, chúng ta có thể check thêm trên docs hoặc vào console.log sẽ thấy.

## 8. Route guards
  - Generate guard file: `ng g g <filename>`
  - Route guards giúp chúng ta bảo vệ route của mình thông qua những guard interfaces sau:
    + `CanActivate`: bảo vệ route cha

    +  `CanActivateChild`: Bảo vệ route con

    +  `CanDeactivate`: Bảo vệ route khi có dấu hiệu chuyển trang, sẽ báo confirm trước khi chuyển trang.

    +  `Resolve`: Lấy data trước khi vào component 

    +  `CanLoad`: thường dùng trong lazy loading module, chặn load module trong trường hợp không thoả điều kiện ví dụ như chưa login vào trang account.
  - Chúng ta sử dụng như sau:
    ```
      // Route config file
      {
        path: '',
        component: AccountComponent,
        canActivate: [AccountGuard], //  Bảo vệ route cha
        canActivateChild: [AccountGuard], // Bảo vệ route con `children`
        data: {dong: 123}, // Thêm data cho route
        children: [
          {
            path: 'profile',
            component: ProfileComponent,
            canDeactivate: [ConfirmDeactiveGuard],
            resolve: {
              profile: ProfileResolve // Lấy data trước
            }
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          }
        ]
      }

      // Guard file
      import { Injectable } from '@angular/core';
      import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad } from '@angular/router';
      import { Observable } from 'rxjs';
      import { AuthService } from './../core/services/auth.service';
      import { Router, Route } from '@angular/router';

      @Injectable({
        providedIn: 'root'
      })
      export class AccountGuard implements CanActivate, CanActivateChild, CanLoad {

        constructor(
          private auth: AuthService,
          private router: Router
        ) {
        }

        canActivate(
          next: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if (!this.auth.isLogin) {
              this.router.navigate(['/auth/login']);
            }
          return this.auth.isLogin;
        }

        canActivateChild(
          next: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {
          return this.canActivate(next, state);
        }
      }
    ```
  - Hướng dẩn code cho phần này có trên docs của angular, mọi người check thêm trên đó.

## 9. Lazy loading
  - to be continue...

