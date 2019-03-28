import { Component, OnInit, EventEmitter, ViewChild, ElementRef, Input, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  item;
  @Output('removeData') removeItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.removeItemEvent.emit(true);
  }
}
