import { Component, OnInit, Input } from '@angular/core';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-lifecycle-content',
  templateUrl: './lifecycle-content.component.html',
  styleUrls: ['./lifecycle-content.component.scss']
})
export class LifecycleContentComponent implements OnInit {
  @Input() lifeCycleHookLists: any;
  constructor() { }

  ngOnInit() {
  }

}
