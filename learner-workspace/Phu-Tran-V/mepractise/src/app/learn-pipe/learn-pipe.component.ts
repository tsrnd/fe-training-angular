import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.scss']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2019, 7, 13);
  person = { name: 'phu', age: 25};
  address = Promise.resolve('andon dannag');
  constructor() { }

  ngOnInit() {
  }

}
