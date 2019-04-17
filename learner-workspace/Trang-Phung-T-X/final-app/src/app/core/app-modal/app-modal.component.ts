import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent implements OnInit {
  title = 'Delete my favorite';
  item: any;
  // tslint:disable-next-line: no-output-rename
  @Output('delItem') deleteItemSelected = new EventEmitter();
  constructor(
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    this.item;
  }

  delItem() {
    this.deleteItemSelected.emit(this.item.id);
  }
}
