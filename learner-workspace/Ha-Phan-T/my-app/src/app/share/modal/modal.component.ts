import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() id: number;
  @Output() positionDeleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  deleteMethod() {
    this.positionDeleted.emit(this.id);
  }
}
