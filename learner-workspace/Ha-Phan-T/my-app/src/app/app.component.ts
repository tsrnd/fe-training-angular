import { Component, Input, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { LocalerService } from './share/services/localer.service';
import { ApiService } from './share/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  // title = 'my-app';
  // index: number;
  // listTab = [
  //   'home',
  //   'info',
  //   'contact'
  // ];

  @Input() titleMethod: string;
  @Input() idMethod: any;
  @ViewChild('key') myKey: ElementRef;
  @ViewChild('data') myData: ElementRef;
  getNewsAssetsSub: Subscription;
  listMethods;
  constructor(
    private localerService: LocalerService,
    private apiService: ApiService
  ) { }
  ngOnInit(): void {
    this.getNewsAssetsSub = this.apiService.getAssets('assets/listmethods.json').subscribe((datas) => {
      this.listMethods = datas;
    });
  }

  ngOnDestroy(): void {
    this.getNewsAssetsSub.unsubscribe();
  }
  // deleteItemFromModal(position) {
  //   listMethod.splice(position - 1, 1);
  // }

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
