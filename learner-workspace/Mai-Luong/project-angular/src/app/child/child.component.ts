import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class AppChildComponent implements OnInit {
  @Input() tabIndex: string;

  constructor() { }
  ngOnInit(): void {
  }

}
