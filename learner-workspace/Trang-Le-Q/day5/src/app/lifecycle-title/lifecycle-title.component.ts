import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { LifecycleContentComponent } from '../lifecycle-content/lifecycle-content.component';
import { Title } from '@angular/platform-browser';
import { from } from 'rxjs';

@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './lifecycle-title.component.html',
  styleUrls: ['./lifecycle-title.component.scss']
})
export class LifecycleTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('title') item;
  
  @ContentChild(LifecycleContentComponent) content: LifecycleContentComponent;

}
