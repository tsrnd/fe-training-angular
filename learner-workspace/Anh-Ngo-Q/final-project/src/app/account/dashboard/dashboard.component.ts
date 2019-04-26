import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getAuthUser().subscribe(v => this.username = v.username);
  }
}
