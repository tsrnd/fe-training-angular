import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: [];
  
  constructor(private local: LocalerService) { }

  ngOnInit() {
    this.user = this.local.getLocalStorage('userLogin');
  }

}
