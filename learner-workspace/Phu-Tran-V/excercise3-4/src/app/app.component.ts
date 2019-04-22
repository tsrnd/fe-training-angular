import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bankName="RBC"
  public itemsList: object[] = [
    {
      title: 'Collapsible Group Item #1',
      description: 'abc',
    },
    {
      title: 'Collapsible Group Item #2',
      description: 'abc',
    },
  ];

  title = 'phutranv';
  content = 'work';
  isShow = true;
  parentindex = 0;
  listTab = [
    'home',
    'profile',
    'contact'
  ];
  hide() {
    alert('hhgg');
  }
}
