import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LocalerService} from '../../core/service/localer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formReactive: FormGroup;
  constructor(
    private fb: FormBuilder,
    private localer: LocalerService,
    private router: Router
  ) { }
  
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
    let arr:any = [];
    for (let key in attrForm) {
      arr.push({[key] : attrForm[key]});
    }
    this.existData = !this.localer.saveLocal(attrForm["email"],arr);
    this.router.navigate(['/login']);
  }
}
