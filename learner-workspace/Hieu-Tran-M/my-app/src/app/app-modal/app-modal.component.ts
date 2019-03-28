import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent implements OnInit {
  @Input() modal: boolean;
  deleteCollapse = false;
  @Input() titleContent: string;

  okDeleteContent(): string {
    this.deleteCollapse = true;
    this.modal = false;
    return this.titleContent;
  }

  Cancle(): void {
    this.modal = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
