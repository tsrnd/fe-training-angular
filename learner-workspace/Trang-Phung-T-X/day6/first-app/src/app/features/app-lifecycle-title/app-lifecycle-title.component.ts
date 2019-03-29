import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './app-lifecycle-title.component.html',
  styleUrls: ['./app-lifecycle-title.component.css']
})
export class AppLifecycleTitleComponent implements OnInit {
  @Input() item;
  // tslint:disable-next-line: no-output-rename
  @Output() showItemDel = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  deleteItem() {
    this.showItemDel.emit(this.item.id);
  }
}
