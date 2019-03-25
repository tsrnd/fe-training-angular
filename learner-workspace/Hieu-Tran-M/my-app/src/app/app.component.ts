import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  showTab = [true, false, false];
  getContent(type: string): void {
    if (type === 'home') {
      this.content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
      this.showTab = [true, false, false];
    } else if (type === 'profile') {
      // tslint:disable-next-line:max-line-length
      this.content = 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
      this.showTab = [false, true, false];
    } else {
      // tslint:disable-next-line:max-line-length
      this.content = 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      this.showTab = [false, false, true];
    }
  }
}
