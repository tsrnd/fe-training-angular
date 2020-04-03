import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AppModalComponent } from '../app-modal/app-modal.component';

@Component({
  selector: 'app-life-cycle-title',
  templateUrl: './life-cycle-title.component.html',
  styleUrls: ['./life-cycle-title.component.css']
})
export class LifeCycleTitleComponent implements OnInit {
  @ViewChild(AppModalComponent) viewChild: AppModalComponent;

  toogleModal = false;
  titleModal?: string;
  displayCollapse = [true, true];

  constructor() { }

  ngOnInit() {
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

}
