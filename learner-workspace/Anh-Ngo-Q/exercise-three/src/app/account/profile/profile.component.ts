import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  userData;

  userForm: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.router.data.subscribe(data => this.userData = data.user.data);
    this.userForm = this.fb.group({
      firstName: [this.userData.first_name, Validators.required],
      lastName: [this.userData.last_name, Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirm: ['']
    });
  }

  isChanged() {
    return this.userForm.dirty;
  }
}
