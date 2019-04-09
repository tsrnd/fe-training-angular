import { Component, Input, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { LocalerService } from './core/services/localer.service';
import { ApiService } from './core/services/api.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  // title = 'my-app';

  @Input() titleMethod: string;
  @Input() idMethod: any;
  @ViewChild('key') myKey: ElementRef;
  @ViewChild('data') myData: ElementRef;
  getNewsAssetsSub: Subscription;
  listMethods;
  formReactive: FormGroup;
  constructor(
    private localerService: LocalerService,
    private apiService: ApiService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.getNewsAssetsSub = this.apiService.getAssets('assets/datas/listmethods.json').subscribe((datas) => {
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
