import { Component, OnInit, Input, ContentChild, Output, EventEmitter } from '@angular/core';
import { LifecycleContentComponent } from '../lifecycle-content/lifecycle-content.component';

@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './lifecycle-title.component.html',
  styleUrls: ['./lifecycle-title.component.scss']
})
export class LifecycleTitleComponent implements OnInit {
  @Input('data') item;
  @ContentChild(LifecycleContentComponent) content: LifecycleContentComponent;
  @Output('exportDeleteItem') deleteItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.content.item = this.item;
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item.id);
  }
}
