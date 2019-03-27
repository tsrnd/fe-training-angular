import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent implements OnInit {
  @Input() item: [];
// tslint:disable-next-line: no-output-rename
  @Output('delItem') delItemEvent = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  delItem(id: number) {
    this.delItemEvent.emit(id);
    console.log(id);
  }

}
