import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    { name: 'a', age: 10 },
    { name: 'b', age: 11 },
    { name: 'c', age: 12 },
  ];

  constructor() { }

  ngOnInit() {
  }
  removePersonByName(name: string) {
    const index = this.arrPeople.findIndex(e => e.name === name);
    this.arrPeople.splice(index, 1);
  }
}
