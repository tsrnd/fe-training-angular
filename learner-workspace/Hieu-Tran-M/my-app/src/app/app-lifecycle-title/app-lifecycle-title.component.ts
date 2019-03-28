import { Component, OnInit, AfterViewInit, ViewChild, QueryList } from '@angular/core';
import { AppModalComponent } from '../app-modal/app-modal.component';

@Component({
  selector: 'app-app-lifecycle-title',
  templateUrl: './app-lifecycle-title.component.html',
  styleUrls: ['./app-lifecycle-title.component.css']
})
export class AppLifecycleTitleComponent implements OnInit {
  @ViewChild(AppModalComponent) viewChild: AppModalComponent;

  indexCollapse?: number;
  indexDelete?: number;
  toogleModal = false;
  titleModal?: string;
  displayCollapse = [true, true];

  getContent(type: string): void {
    if (type === 'onChange') {
      this.indexCollapse = 0;
    } else if (type === 'onInit') {
      this.indexCollapse = 1;
    } else {
      this.indexCollapse = 2;
    }
  }

  deleteContent(content: string): void {
    if (content === 'onChange') {
      this.toogleModal = true;
      this.titleModal = content;
    } else if (content === 'onInit') {
      this.toogleModal = true;
      this.titleModal = content;
    } else {
      this.toogleModal = true;
      this.titleModal = content;
    }
  }
  get behaviorDelete(): boolean {
    return this.viewChild.deleteCollapse;
  }

  get nameCollapse(): string {
    return this.viewChild.titleContent;
  }

  deleteCollapse(name: string): void {
    if (name === 'onChange') {
      this.displayCollapse = [false, true];
    }
  }
  constructor() { }

  ngOnInit() {
  }
}
