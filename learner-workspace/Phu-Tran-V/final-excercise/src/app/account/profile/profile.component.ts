import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { LocalerService } from 'src/app/core/service/localer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  title = 'User Profile';
  user;
  formReactive: FormGroup;
  msgSuccess: string;

  constructor(
    private local: LocalerService,
    private formBuild: FormBuilder,
  ) { }

  ngOnInit() {
    this.user = this.local.getLocalStorage('userLogin');
    this.formReactive = this.formBuild.group({
      first_name: [this.user.first_name, Validators.required],
      last_name: [this.user.last_name, Validators.required],
      email: [this.user.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  onSubmit() {
    this.local.saveLocalStorage('userLogin', this.formReactive.value);
    this.msgSuccess = 'Update your profile successfull!';
    let data = this.local.getLocalStorage('register');
    for (let index = 0; index < data.length; index++) {
      if (data[index].email === this.user.email) {
        data[index] = this.formReactive.value;
      }
      this.local.saveLocalStorage('register', data);
    }
  }

}
