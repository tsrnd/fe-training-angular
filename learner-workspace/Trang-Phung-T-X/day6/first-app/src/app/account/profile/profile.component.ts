import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/core/services/dialog.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  editName: string;
  data: any;
  formReactive: FormGroup;
  KEY = 'userRegister';
  show: boolean;
  showSuccess: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService,
    private fb: FormBuilder,
    private localService: LocalerService
  ) { }
  // Resolve`: used for doing operations (resolve data) just before route activation etc.
  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.user = data.user;
        // this.editName = this.user.data.first_name; // user define in account-routing
      });
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

  cancel() {
    this.gotoDashboard();
  }

  onSubmit() {
    // reset alert
    this.hideAlert();
    // get data in localStorage
    let valueLocal = this.localService.getLocalStorage(this.KEY);
    // check data in localStorage be has value or null
    let value = valueLocal ? valueLocal : [];
    // check email is exist in local
    if (valueLocal && valueLocal.find(ob => {
      return ob.email === this.formReactive.controls.email.value;
    })) {
      return this.show = true;
    }
    // push item to arr items in local
    value.push(this.formReactive.value);
    // save local
    this.localService.saveLocalStorage(this.KEY, value);
    this.showSuccess = true;
  }

  // used to allow or deny exit from route.
  canDeactivate(): Observable<boolean> | boolean {
    if (this.user.name !== this.editName) {
      return window.confirm('Discard changes?');
    }
    return true;
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }

  validatePasswordConfirm(group: FormGroup) {
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
