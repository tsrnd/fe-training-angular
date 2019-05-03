import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/feature/service/localer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userLogin: any[];
  constructor(
    private router: ActivatedRoute,
    private user: LocalerService
  ) { }

  ngOnInit() {
    this.router.data.subscribe(data => console.log(data));

    this.userLogin = this.user.getLocalStorage('userLogin');
    // console.log(this.userLogin);

  }

}
