import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import {LifecycleContentComponent} from '../lifecycle-content/lifecycle-content.component';
@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './lifecycle-title.component.html',
  styleUrls: ['./lifecycle-title.component.scss']
})
export class LifecycleTitleComponent implements OnInit {
  @Input() index:number;
  @Input() item:any;
  @Output() itemDelete = new EventEmitter<any>();
  constructor() { }
  @ViewChild(LifecycleContentComponent) curentItem = LifecycleContentComponent;
  ngOnInit() {
  }
  ShowDialog() {
    this.itemDelete.emit({indexItem: this.index, item: this.item});
  }
}
