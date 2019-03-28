import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }
  deleteMethod() {
    document.getElementById(this.id).setAttribute("class", "card hide");
  }
}
