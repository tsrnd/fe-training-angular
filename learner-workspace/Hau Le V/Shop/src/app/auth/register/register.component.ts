import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LocalerService } from '../../core/service/localer.service';
import { AuthService } from '../../core/service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private localer: LocalerService,
    private auth: AuthService
    ) { }
  formReactive: FormGroup;

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  existData:boolean = false;
  onSubmit(){
    let attrForm = this.formReactive.value;
    if (this.localer.saveLocal(attrForm)){
      this.auth.login(attrForm.email,attrForm.password);
      this.router.navigate(['/account/profile']);
    }
    else {
      this.router.navigate(['/register']);
      this.existData = true;
    }
  }

}
