import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formReactive: FormGroup;
  arrayUser = [];
  failedCreate?: boolean;

  constructor(private localerService: LocalerService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['abc@', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.formReactive.value);
    this.arrayUser.push(this.formReactive.value);
    if (this.arrayUser.some(user => user.email === this.formReactive.value.email)) {
      this.failedCreate = true;
      this.arrayUser.pop();
    } else {
      this.localerService.saveLocalStorage('user', this.arrayUser);
    }
  }
}
