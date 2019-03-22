import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() iIndex:number;
  @Output() oIndex = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  Delete(){
    this.oIndex.emit(this.iIndex);
  }
}
