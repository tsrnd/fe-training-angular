import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { LocalerService, KEY } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard';
  currentUser: any;

  constructor(
    private localService: LocalerService
  ) { }

  ngOnInit() {
    this.currentUser = this.localService.getLocalStorage(KEY.currentUser);
  }

}
