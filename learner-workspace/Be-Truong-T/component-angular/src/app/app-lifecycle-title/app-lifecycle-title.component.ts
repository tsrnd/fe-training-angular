import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-lifecycle-title',
  templateUrl: './app-lifecycle-title.component.html',
  styleUrls: ['./app-lifecycle-title.component.scss']
})
export class AppLifecycleTitleComponent implements OnInit {

  @Input() elementCard: any;
  @Output() cardCurrent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  detailCard($event) {
    this.cardCurrent.emit($event.target.id);
    console.log('ID clicking :' + $event.target.id);
  }
}
