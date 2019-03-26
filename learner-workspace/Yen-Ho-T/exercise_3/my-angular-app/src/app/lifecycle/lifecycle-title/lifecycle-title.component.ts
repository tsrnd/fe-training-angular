import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './lifecycle-title.component.html',
  styleUrls: ['./lifecycle-title.component.scss']
})
export class LifecycleTitleComponent implements OnInit {
  @Input() name: any;
  @Input() position: number;
  @Output() itemDelete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  openDeleteModal() {
    this.itemDelete.emit({name: this.name, position: this.position});
  }
}
