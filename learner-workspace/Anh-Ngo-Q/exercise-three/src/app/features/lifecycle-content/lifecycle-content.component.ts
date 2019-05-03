import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-content',
  templateUrl: './lifecycle-content.component.html',
  styleUrls: ['./lifecycle-content.component.scss']
})
export class LifecycleContentComponent implements OnInit {
  item;

  constructor() { }

  ngOnInit() {
  }
}
