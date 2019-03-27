import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-content',
  templateUrl: './app-lifecycle-content.component.html',
  styleUrls: ['./app-lifecycle-content.component.css']
})
export class AppLifecycleContentComponent implements OnInit {
  @Input() item: [];

  constructor() { }
  ngOnInit() { }

}
