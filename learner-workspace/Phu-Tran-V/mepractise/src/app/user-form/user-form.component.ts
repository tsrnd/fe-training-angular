import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHighlight = true;
  constructor() { }

  ngOnInit() {
  }
  // showEvent(event) {
  //   this.name = event.target.value;
  // }
}
