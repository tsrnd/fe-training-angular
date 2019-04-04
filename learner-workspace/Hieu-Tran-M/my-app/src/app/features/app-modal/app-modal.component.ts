import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent implements OnInit {

  deleteCollapse = {onChange: false, onInit: false, doCheck: false};
  @Input() titleContent: string;
  @Output() delModal = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  okDeleteContent(): void {
    this.delModal.emit(true);
    if (this.titleContent === 'onChange') {
      this.deleteCollapse.onChange = true;
    } else if (this.titleContent === 'onInit') {
      this.deleteCollapse.onInit = true;
    } else if (this.titleContent === 'doCheck') {
      this.deleteCollapse.doCheck = true;
    }
  }
}
