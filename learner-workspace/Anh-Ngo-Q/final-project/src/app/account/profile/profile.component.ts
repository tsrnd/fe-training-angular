import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  user;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private localer: LocalerService
  ) { }

  ngOnInit() {
    this.auth.getAuthUser().subscribe(v => this.user = v);

    this.profileForm = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, Validators.required]
    });
  }

  /**
   * Update user value from profile update form
   */
  updateSubmit() {
    let users = this.localer.getLocalStorage('users');
    users = (users as Array<any>).map(v => {
      if (v.id === this.user.id) {
        const updatedValue = this.profileForm.value;
        v = { ...v, ...updatedValue };
        this.localer.setLocalStorage('user', v);
      }
      return v;
    });
    console.log('what', users);
    this.auth.getAuthUser().next(this.localer.getLocalStorage('user'));
    this.localer.setLocalStorage('users', users);
    this.profileForm.markAsPristine();
  }
}
