import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { LocalerService } from './share/services/localer.service';
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
    { id: 1, title: 'test test test test test', content: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { id: 2, title: 'test test test test test', content: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { id: 3, title: 'test test test test test', content: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { id: 4, title: 'test test test test test', content: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { id: 5, title: 'test test test test test', content: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { id: 6, title: 'test test test test test', content: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { id: 7, title: 'test test test test test', content: 'Some quick example text to build on the card title and make up the bulk of the card' },
    { id: 8, title: 'test test test test test', content: 'Some quick example text to build on the card title and make up the bulk of the card' },
  ];
  @Input() titleMethod: string;
  @Input() idMethod: any;
  @ViewChild('key') myKey: ElementRef;
  @ViewChild('data') myData: ElementRef;
  constructor(private localerService: LocalerService) { }
  ngOnInit(): void {
    // if (!this.index) {
    //   this.index = 0;
    // }
  }
  deleteItemFromModal(position) {
    this.listMethod.splice(position - 1, 1);
  }
  saveLocal() {
    if (this.myKey.nativeElement.value && this.myData.nativeElement.value) {
      this.localerService.saveLocalStorage(this.myKey.nativeElement.value, this.myData.nativeElement.value);
      console.log(this.myKey.nativeElement.value);
      console.log(this.myData.nativeElement.value);
    }
  }
  getLocal() {
    if (this.myKey.nativeElement.value) {
      this.myData.nativeElement.value = this.localerService.getLocalStorage(this.myKey.nativeElement.value);
    }
  }
  saveSession() {
    if (this.myKey.nativeElement.value && this.myData.nativeElement.value) {
      this.localerService.saveSessionStorage(this.myKey.nativeElement.value, this.myData.nativeElement.value);
    }
  }
  getSession() {
    if (this.myKey.nativeElement.value) {
      this.myData.nativeElement.value = this.localerService.getSessionStorage(this.myKey.nativeElement.value);
    }
  }
}
