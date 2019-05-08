import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: [];
  constructor(private local: LocalerService) { }

  ngOnInit() {
    this.user = this.local.getLocalStorage('userLogin');
  }

}
