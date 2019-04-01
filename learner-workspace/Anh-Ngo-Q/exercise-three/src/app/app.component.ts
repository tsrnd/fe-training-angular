import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { LocalerService } from './localer.service';
import { ApiService } from './api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  getNewsAssetsSub: Subscription;
  getDataAssetsSub: Subscription;

  constructor(
    private localer: LocalerService,
    private api: ApiService
  ) { }

  @ViewChild(ModalComponent) comfirmModal: ModalComponent;

  deleteItemID;

  index = 0;

  listTab = [
    'home',
    'info',
    'contact'
  ];

  listColor = [
    'white',
    'blue',
    'green',
    'red'
  ];

  color = this.listColor[0];

  datas;

  listObject = [
    {
      name: 'test1'
    },
    {
      name: 'test2'
    },
    {
      name: 'test3'
    },
  ];

  selectedValue;
  getStorageValue;

  forObject = false;

  news;

  removeItem(confirmDelete) {
    if (confirmDelete) {
      this.datas = this.datas.filter(data => {
        return data.id !== this.deleteItemID;
      });
      this.deleteItemID = undefined;
    }
  }

  passDeleteItemToModal(itemID) {
    this.deleteItemID = itemID;
    this.comfirmModal.item = this.datas[this.deleteItemID];
  }

  saveInput(isLocal) {
    isLocal ? this.localer.saveLocalStorage(this.selectedValue) : this.localer.saveSessionStorage(this.selectedValue);
    if (!this.forObject) {
      this.selectedValue = null;
    }
  }

  detectChange() {
    this.selectedValue = this.forObject ? this.listObject[0] : null;
  }

  ngOnInit(): void {
    // get news
    this.getNewsAssetsSub = this.api.getAssets('assets/news.json').subscribe((datas) => {
      this.news = datas;
    });

    // get data
    // this.getDataAssetsSub = this.api.getAssets('assets/lifecycles.json').subscribe((datas) => {
    //   this.datas = datas;
    // });
  }

  ngOnDestroy(): void {
    this.getNewsAssetsSub.unsubscribe();
    // this.getDataAssetsSub.unsubscribe();
  }
}
