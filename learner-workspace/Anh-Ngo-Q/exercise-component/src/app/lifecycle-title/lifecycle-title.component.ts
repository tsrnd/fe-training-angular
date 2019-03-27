import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { LifecycleContentComponent } from '../lifecycle-content/lifecycle-content.component';

@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './lifecycle-title.component.html',
  styleUrls: ['./lifecycle-title.component.scss']
})
export class LifecycleTitleComponent implements OnInit {

  @Input('data') item;
  @ContentChild(LifecycleContentComponent) content: LifecycleContentComponent;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.content.isCollapsed = !this.content.isCollapsed;
  }
}
