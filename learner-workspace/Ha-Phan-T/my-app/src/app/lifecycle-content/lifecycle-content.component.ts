import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-content',
  templateUrl: './lifecycle-content.component.html',
  styleUrls: ['./lifecycle-content.component.scss']
})
export class LifecycleContentComponent implements OnInit {
  @Input() contents: any;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
