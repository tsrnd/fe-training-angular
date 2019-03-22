import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalerService } from '../../core/service/localer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public data:any;
  isSubmit:boolean;
  title = "Profile";

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private localer: LocalerService,
    private auth: AuthService,
    private cookieService: CookieService,
    ) {
     }
  formReactive: FormGroup;
  cookieUser:any;
  user:any;
  updtSuccess:boolean = false;
  ngOnInit() {
    this.isSubmit = false;

    this.cookieUser = this.cookieService.get('user').split(",");
    this.user = this.auth.getProfile(this.cookieUser[0]);
    
    this.formReactive = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    this.isSubmit = true;
    this.updtSuccess = this.localer.updateUser(this.user.email,this.formReactive.value);
  }
}
