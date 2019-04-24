import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LocalerService } from './../../core/services/localer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // form reactive
  formReactive: FormGroup;

  constructor(private fb: FormBuilder,
              private localService: LocalerService) { }

  show = false;
  showSuccess = false;
  key = 'userRegister';

  ngOnInit() {
    // build form
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
    // reset alert
    this.hideAlert();
    // get data in localStorage
    let valueLocal = this.localService.getLocalStorage(this.key);
    // check data in localStorage be has value or null
    let value = valueLocal ? valueLocal : [];
    // check email is exist in local
    if (valueLocal && valueLocal.find( ob => {
      return ob.email === this.formReactive.controls.email.value;
    })) {
      return this.show = true;
    }
    // push item to arr items in local
    value.push(this.formReactive.value);
    // save local
    this.localService.saveLocalStorage(this.key, value);
    this.showSuccess = true;
  }

  validatePasswordConfirm( group: FormGroup ) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;
    // compare pass with confirmpass, show mess 'notSame' if diff
    return pass === confirmPass ? null : { notSame: true };
  }

  hideAlert() {
    this.show = false;
    this.showSuccess = false;
  }
}
