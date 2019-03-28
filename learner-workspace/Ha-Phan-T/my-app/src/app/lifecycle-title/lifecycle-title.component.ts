import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LifecycleContentComponent } from './../lifecycle-content/lifecycle-content.component';

@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './lifecycle-title.component.html',
  styleUrls: ['./lifecycle-title.component.scss']
})
export class LifecycleTitleComponent implements OnInit {
  @Input() method: any;
  @Output() itemDelete = new EventEmitter();
  @ViewChild(LifecycleContentComponent) contentComponent: LifecycleContentComponent;
  constructor() { }

  ngOnInit() {
  }
  confirmDelete() {
    this.itemDelete.emit({ title: this.method.title, id: this.method.id });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.contentComponent.id = this.method.id;
      this.contentComponent.content = this.method.content;
    });
  }
}
