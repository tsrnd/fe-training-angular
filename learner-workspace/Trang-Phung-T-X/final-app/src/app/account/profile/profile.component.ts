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
  show: boolean;
  showSuccess: boolean;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private localService: LocalerService,
    private commonService: CommonService
  ) { }
  // Resolve`: used for doing operations (resolve data) just before route activation etc.
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
    // reset alert
    this.hideAlert();
    // get data in localStorage
    let allUser = this.localService.getLocalStorage(KEY.listUser);
    // check data in localStorage be has value or null
    // remove item currentUser
    allUser = allUser.filter(user => {
      return user.id !== this.currentUser.id;
    });
    // check email is exist in local
    if (allUser && allUser.find(ob => {
      return ob.email === this.formReactive.controls.email.value;
    })) {
      return this.show = true; // show error
    }

    // push item to arr items in local
    // tslint:disable-next-line: prefer-const
    let newUser = Object.assign(this.formReactive.value, { id: this.currentUser.id });
    allUser.push(newUser);
    // save local
    this.localService.saveLocalStorage(KEY.listUser, allUser);
    // this.localService.removeLocalStorage(KEY.currentUser);
    // this.localService.saveLocalStorage(KEY.currentUser, this.formReactive.value);
    this.showSuccess = true;
    // this.router.navigate(['/dashboard']);
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
    // tslint:disable-next-line: prefer-const
    let pass = group.controls.password.value;
    // tslint:disable-next-line: prefer-const
    let confirmPass = group.controls.confirmPassword.value;
    // compare pass with confirmpass, show mess 'notSame' if diff
    return pass === confirmPass ? null : { notSame: true };
  }

  hideAlert() {
    this.show = false;
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
