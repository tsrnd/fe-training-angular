import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ModalComponent } from 'src/app/core/modals/modal/modal.component';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, OnDestroy {

  @ViewChild(ModalComponent) comfirmModal: ModalComponent;

  getDataAssetsSub: Subscription;

  datas;

  deleteItemID;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    // get data
    this.getDataAssetsSub = this.api.getAssets('assets/lifecycles.json').subscribe((datas) => {
      this.datas = datas;
    });
  }

  ngOnDestroy(): void {
    this.getDataAssetsSub.unsubscribe();
  }

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
}
