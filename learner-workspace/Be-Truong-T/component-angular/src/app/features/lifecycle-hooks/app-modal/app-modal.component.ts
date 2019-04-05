import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent implements OnInit {
  @Input() elementClick: [];
  @Output() removeHook = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  methodRemoveHook(id: number) {
  this.removeHook.emit(id);
  console.log('Remove ID: ' + id);
  }


}
