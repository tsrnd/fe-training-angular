import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalerService } from 'src/app/core/services/localer.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result?: boolean;
  submited?: boolean;

  constructor(private localService: LocalerService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(ngForm: NgForm) {
    const data = JSON.parse(this.localService.getLocalStorage('user'));
    // tslint:disable-next-line:no-shadowed-variable
    this.result = data.some(data => data.email === ngForm.value.email && data.password === ngForm.value.password);
    console.log(this.result);
    this.submited = true;
    if (this.result) {
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          // Redirect the user
          this.router.navigateByUrl('/account/profile');
        }
      });
    }
  }
}
