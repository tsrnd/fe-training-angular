import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { LocalerService } from './../../services/localer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formReactive: FormGroup;

  constructor(private fb: FormBuilder,
              private localService: LocalerService) { }

  show = false;
  showSuccess = false;
  key = 'userRegister';

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])),
      password: ['', Validators.required],
      confirmPassword: ['']
    }, { validators: this.validatePasswordConfirm }
    );
  }
  onSubmit() {
    this.hideAlert();
    let valueLocal = this.localService.getLocalStorage(this.key);
    let value = valueLocal ? valueLocal : [];
    if (valueLocal && valueLocal.find( ob => {
      return ob.email === this.formReactive.controls.email.value;
    })) {
      return this.show = true;
    }
    value.push(this.formReactive.value);
    this.localService.saveLocalStorage(this.key, value);
    this.showSuccess = true;
  }

  validatePasswordConfirm( group: FormGroup ) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  hideAlert() {
    this.show = false;
    this.showSuccess = false;
  }
}
