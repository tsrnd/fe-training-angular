import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent implements OnInit {
  // tslint:disable-next-line: no-output-rename
  @Output('delItem') deleteItemSelected = new EventEmitter();
  item: { id: number; title: string; content: string; };

  constructor() { }

  ngOnInit() { }

  // pass id from modal to app-root order to delete
  delItem() {
    this.deleteItemSelected.emit(this.item.id);
  }

}
