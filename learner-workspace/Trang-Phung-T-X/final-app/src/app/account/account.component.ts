import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/services/common.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: any;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.currentUser = this.commonService.checkCurrentUser();
  }

}
