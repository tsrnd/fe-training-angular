import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/feature/service/localer.service';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/feature/service/api.service';

const REGISTER = 'register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msgErr: string;
  msgSuccess: string;
  constructor(
    private localService: LocalerService,
    private authSerive: AuthService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.api.get('users/2').toPromise();
    
  }

  onSubmit(form) {
    console.log(form.value);
    let data = this.localService.getLocalStorage(REGISTER);
    if (data.find((user) => {
      return user.email === form.value.email && user.password === form.value.password;
    })) {
      this.msgErr = null;
      this.msgSuccess = 'Login successfully!';
      this.localService.saveLocalStorage('userLogin', data);
      this.authSerive.setCookie('isLogin', 'true', 10);
      this.router.navigate(['/account']);

    } else {
      this.msgSuccess = null;
      this.msgErr = "Account doesn't exist. Enter a different account.";
    }
  }
}
