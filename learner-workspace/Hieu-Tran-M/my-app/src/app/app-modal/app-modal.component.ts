import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent implements OnInit {
  @Input() displayModal: boolean;
  deleteCollapse = {onChange: false, onInit: false, doCheck: false};
  @Input() titleContent: string;

  okDeleteContent(): void {
    if (this.titleContent === 'onChange') {
      this.deleteCollapse.onChange = true;
    } else if (this.titleContent === 'onInit') {
      this.deleteCollapse.onInit = true;
    } else if (this.titleContent === 'doCheck') {
      this.deleteCollapse.doCheck = true;
    }
    this.displayModal = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
