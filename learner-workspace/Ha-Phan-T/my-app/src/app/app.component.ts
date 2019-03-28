import { Component, Input } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // title = 'my-app';
  // index: number;
  // listTab = [
  //   'home',
  //   'info',
  //   'contact'
  // ];
  listMethod = [
    { id: 1, title: 'hello1', content: 'hello111111' },
    { id: 2, title: 'hello2', content: 'hello111112' },
    { id: 3, title: 'hello3', content: 'hello111113' },
    { id: 4, title: 'hello4', content: 'hello111114' },
    { id: 5, title: 'hello5', content: 'hello111115' },
    { id: 6, title: 'hello6', content: 'hello111116' },
    { id: 7, title: 'hello7', content: 'hello111117' },
    { id: 8, title: 'hello8', content: 'hello111118' },
  ];
  @Input() titleMethod: string;
  @Input() idMethod: any;
  ngOnInit(): void {
    // if (!this.index) {
    //   this.index = 0;
    // }
  }
  deleteItemFromModal(position) {
    this.listMethod.splice(position - 1, 1);
  }
}
