import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Input('account-id') id: string;
  @Output() removePerson = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  removeByClick() {
    this.removePerson.emit(this.name);
  }
}
