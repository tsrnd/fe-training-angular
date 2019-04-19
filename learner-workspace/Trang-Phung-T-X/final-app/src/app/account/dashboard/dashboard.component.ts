import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard';
  currentUser: any;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.currentUser = this.commonService.checkCurrentUser();
  }

}
