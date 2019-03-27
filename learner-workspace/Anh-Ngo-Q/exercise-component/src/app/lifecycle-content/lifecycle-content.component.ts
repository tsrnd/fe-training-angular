import { Component, OnInit, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-content',
  templateUrl: './lifecycle-content.component.html',
  styleUrls: ['./lifecycle-content.component.scss']
})
export class LifecycleContentComponent implements OnInit {
  @Input('data') item;

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }
}
