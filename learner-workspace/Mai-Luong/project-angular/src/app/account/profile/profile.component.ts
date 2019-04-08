import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
  ) {}
  userData: any;
  ngOnInit() {
    this.router.data.subscribe(data => this.userData = data.user.data);
  }
}
