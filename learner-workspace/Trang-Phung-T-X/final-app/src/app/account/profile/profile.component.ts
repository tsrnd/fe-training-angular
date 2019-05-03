import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalerService, KEY } from 'src/app/core/services/localer.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'My profile';
  user: any;
  editName: string;
  data: any;
  formReactive: FormGroup;
  showError: boolean;
  showSuccess: boolean;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private localService: LocalerService,
    private commonService: CommonService
  ) { }
  // Resolve: used for doing operations (resolve data) just before route activation etc.
  ngOnInit() {
    this.currentUser = this.commonService.checkCurrentUser();
    this.route.data
      .subscribe(data => {
        this.user = data.user;
      });
    this.formReactive = this.fb.group({
      firstName: [this.currentUser.firstName, Validators.required],
      lastName: [this.currentUser.lastName, Validators.required],
      email: [this.currentUser.email, [Validators.required, Validators.email]],
      password: [this.currentUser.password, Validators.required],
      confirmPassword: [this.currentUser.password]
    }, { validators: this.validatePasswordConfirm }
    );
  }

  cancel() {
    this.gotoDashboard();
  }

  onSubmit() {
    this.hideAlert(); // reset alert
    let allUser = this.localService.getLocalStorage(KEY.listUser); // get all users in localStorage

    allUser = allUser.filter(user => { // remove currentUser on list users
      return user.id !== this.currentUser.id;
    });

    if (allUser && allUser.find(ob => {
      return ob.email === this.formReactive.controls.email.value; // check email is exist in local
    })) {
      return this.showError = true; // show error
    }

    // allowed edit email so add id
    const newUser = Object.assign(this.formReactive.value, { id: this.currentUser.id }); // add id
    allUser.push(newUser); // add value currentUser
    this.localService.saveLocalStorage(KEY.listUser, allUser); // save local

    this.showSuccess = true;
    this.router.navigate(['/dashboard']);
  }

  // used to allow or deny exit from route.
  canDeactivate(): boolean {
    if (this.hasEmpty(this.formReactive.value)) {
      return confirm('Your profile was changed?');
    }
    return true;
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }

  validatePasswordConfirm(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  hideAlert() {
    this.showError = false;
    this.showSuccess = false;
  }

  hasEmpty(arr) {
    // tslint:disable-next-line: prefer-const
    for (let ele in arr) {
      if (arr[ele] === '') {
        return true;
      }
    }
    return false;
  }
}
