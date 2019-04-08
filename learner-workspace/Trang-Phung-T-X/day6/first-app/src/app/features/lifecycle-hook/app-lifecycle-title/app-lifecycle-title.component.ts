import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './app-lifecycle-title.component.html',
  styleUrls: ['./app-lifecycle-title.component.css']
})
export class AppLifecycleTitleComponent implements OnInit {
  // pass item from app-root to title-component
  @Input() item;

  // pass id(function deleteItem to app-root(order to delete))
  @Output() showItemDel = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  deleteItem() {
    this.showItemDel.emit(this.item.id);
  }
}
