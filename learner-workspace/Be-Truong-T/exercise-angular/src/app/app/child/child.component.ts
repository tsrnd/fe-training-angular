import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() tabClick: any;
  constructor() { }

  listContentTab = [
    {
      title: 'Home',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {
      title: 'Profile',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    },
    {
      title: 'Contact',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }
  ];
  ngOnInit() {
  }

}
