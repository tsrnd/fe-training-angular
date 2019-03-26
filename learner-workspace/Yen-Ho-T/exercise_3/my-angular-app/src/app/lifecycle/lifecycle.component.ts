import { Component, OnInit, Input, ContentChild } from '@angular/core';
import {ModalComponent} from './../share/modal/modal.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  @Input() listItem: any;
  @ContentChild(ModalComponent) modal: ModalComponent;
  constructor() { }

  ngOnInit() {
  }
  visibleDeleteModal(e) {
    this.modal.name = e.name;
    this.modal.position = e.position;
  }
}
