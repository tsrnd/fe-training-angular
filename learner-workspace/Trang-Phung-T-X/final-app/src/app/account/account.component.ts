import { Component, OnInit } from '@angular/core';
import { LocalerService, KEY } from '../core/services/localer.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: any;

  constructor(
    private localService: LocalerService
  ) { }

  ngOnInit() {
    this.currentUser = this.localService.getLocalStorage(KEY.currentUser);
  }

}
