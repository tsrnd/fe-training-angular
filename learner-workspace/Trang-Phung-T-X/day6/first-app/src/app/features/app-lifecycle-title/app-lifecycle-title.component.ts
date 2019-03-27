import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './app-lifecycle-title.component.html',
  styleUrls: ['./app-lifecycle-title.component.css']
})
export class AppLifecycleTitleComponent implements OnInit {
  @Input()item: [];

  constructor() { }
  ngOnInit() { }
}
