import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lifecycle-title',
  templateUrl: './lifecycle-title.component.html',
  styleUrls: ['./lifecycle-title.component.scss']
})
export class LifecycleTitleComponent implements OnInit {
  @Input() listMethod: any;
  @Input() titleMethod: string;
  @Input() idMethod: any;

  constructor() { }

  ngOnInit() {
  }
  showContent(id) {
    let tmp = document.getElementById(id);
    if (tmp.className == "collapse") {
      tmp.setAttribute("class", "collapse show");
    } else {
      tmp.setAttribute("class", "collapse");
    }
  }
  callPopup(id, title) {
    this.titleMethod = title;
    this.idMethod = "card-" + id;
  }

}
