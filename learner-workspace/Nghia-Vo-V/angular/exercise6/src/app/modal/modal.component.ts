import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input('title') data; 
  @Output('removeData') removeDataEvent = new EventEmitter();

  ngOnInit() {
  }


  removeData(id) {
    this.removeDataEvent.emit(id);
  }
}
