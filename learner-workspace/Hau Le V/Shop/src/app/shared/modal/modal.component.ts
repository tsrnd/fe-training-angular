import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() itemDelete: any;
  @Output() opItemDelete = new EventEmitter<any>();

  listFavorite:any;
  constructor() { }

  ngOnInit() {
  }

  DeleteItem(){
    this.opItemDelete.emit(true);
  }

}
