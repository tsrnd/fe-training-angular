import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import {LifecycleContentComponent} from './../lifecycle-content/lifecycle-content.component';
@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './lifecycle-title.component.html',
  styleUrls: ['./lifecycle-title.component.scss']
})
export class LifecycleTitleComponent implements OnInit, AfterViewInit {
  @Input() item: any;
  @Input() position: number;
  @Output() itemDelete = new EventEmitter();
  @ViewChild(LifecycleContentComponent) contentConponent: LifecycleContentComponent;
  constructor() { }

  ngOnInit() {
  }
  openDeleteModal() {
    this.itemDelete.emit({name: this.item.name, position: this.position});
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.contentConponent.content = this.item.content;
      this.contentConponent.position = this.position;
    });
  }
}
