import { Component, OnInit, OnChanges } from '@angular/core';
import { LocalerService } from './core/services/localer.service';
import { ApiService } from './core/services/api.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  indexTab = 0;
  indexPage = 5;
  limit = 100;
  title = 'Card title';
  events$: any;
  cards: any;
  formReactive: FormGroup;
  arrayUser = [];
  failedCreate?: boolean;

  constructor(
    public localerService: LocalerService,
    private api: ApiService,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    // this.api.getAssets('assets/news.json').subscribe(data => {
    //   this.cards = data;
    //   console.log(this.cards); });
    this.events$ = this.api.getAssets('assets/news.json');

    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['abc@', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  changePage(page: string): void {
    if (page === 'home') {
      this.indexPage = 0;
    } else if (page === 'lifeCycleHook') {
      this.indexPage = 1;
    } else if (page === 'directive') {
      this.indexPage = 2;
    } else if (page === 'pipe') {
      this.indexPage = 3;
    } else if (page === 'service') {
      this.indexPage = 4;
    } else if (page === 'register') {
      this.indexPage = 5;
    }
  }

  getContent(type: string): void {
    if (type === 'home') {
      this.indexTab = 0;
    } else if (type === 'profile') {
      this.indexTab = 1;
    } else {
      this.indexTab = 2;
    }
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
