import { Component, OnInit, Input } from '@angular/core';
import { currentId } from 'async_hooks';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() currentTab: number;
  contentsTab = [
    {title: `Home content`,
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos aliquam consequuntur,
    esse provident impedit minima porro! Laudantium laboriosam culpa quis fugiat ea, architecto velit ab,
    deserunt rem quibusdam voluptatum.`},
    {title: `Profile content`,
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos aliquam consequuntur,
    esse provident impedit minima porro! Laudantium laboriosam culpa quis fugiat ea, architecto velit ab,
    deserunt rem quibusdam voluptatum.`},
    {title: `Contact content`,
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos aliquam consequuntur,
    esse provident impedit minima porro! Laudantium laboriosam culpa quis fugiat ea, architecto velit ab,
    deserunt rem quibusdam voluptatum.`}
  ];

  constructor() { }
  ngOnInit() {
  }
}
