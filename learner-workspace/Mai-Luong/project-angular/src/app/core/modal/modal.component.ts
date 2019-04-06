import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() lifeCycleHookLists: any;

  // tslint:disable-next-line:no-output-rename
  @Output('removeItem') removeItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  removeItem(e) {
    this.removeItemEvent.emit(this.lifeCycleHookLists.id);
  }
}
