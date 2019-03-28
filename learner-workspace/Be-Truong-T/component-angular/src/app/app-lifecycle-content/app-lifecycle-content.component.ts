import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-lifecycle-content',
  templateUrl: './app-lifecycle-content.component.html',
  styleUrls: ['./app-lifecycle-content.component.scss']
})
export class AppLifecycleContentComponent implements OnInit {

  @Input() elementClick: any;
  @Input() elementCard: any;
  constructor() { }

  ngOnInit() {
  }

}
