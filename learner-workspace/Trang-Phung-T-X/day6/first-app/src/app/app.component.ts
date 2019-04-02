import { Component, ViewChild, OnDestroy } from '@angular/core';
import { AppModalComponent } from './shares/app-modal/app-modal.component';
import { ApiService } from './../app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Lifecycle Hooks';
  data: [];
  error: any;
  sub: Subscription;

  constructor( private apiService: ApiService) {
    this.sub = apiService.getAssets('news.json').subscribe( ob => {
      this.data = ob;
    },
    err => {
      this.error = err;
    },
  );
  }
  @ViewChild(AppModalComponent) comfirmModal: AppModalComponent;
  color: string;
  defaultColor = 'blue';

// tslint:disable-next-line: use-life-cycle-interface


  // showModalWithContent(id) {
  //   this.comfirmModal.item = this.data.find(item => item.id === id);
  // }

  // delItem(id) {
  //   if (id) {
  //     this.data = this.data.filter(item => {
  //       return item.id !== id;
  //     });
  //   }
  // }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
