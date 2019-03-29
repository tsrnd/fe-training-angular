import { Component, OnInit, AfterViewInit, ViewChild, QueryList, OnChanges } from '@angular/core';
import { AppModalComponent } from '../app-modal/app-modal.component';

@Component({
  selector: 'app-app-lifecycle-title',
  templateUrl: './app-lifecycle-title.component.html',
  styleUrls: ['./app-lifecycle-title.component.css']
})
export class AppLifecycleTitleComponent implements OnInit {
  @ViewChild(AppModalComponent) viewChild: AppModalComponent;

  toogleModal = false;
  titleModal?: string;
  displayCollapse = [true, true];

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

  get behaviorDelete(): any {
    return this.viewChild.deleteCollapse;
  }

  get nameCollapse(): string {
    return this.viewChild.titleContent;
  }

  delCollapse(e: any): void {
    console.log(e);
    this.toogleModal = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
