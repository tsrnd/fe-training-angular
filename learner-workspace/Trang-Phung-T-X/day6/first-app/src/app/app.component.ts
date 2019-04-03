import { Component, ViewChild, OnDestroy } from '@angular/core';
import { AppModalComponent } from './shares/app-modal/app-modal.component';
import { ApiService } from './../app/services/api.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Lifecycle Hooks';

  /* option1: get data
  data: [];
  error: any;
  sub: Subscription;

  constructor( private apiService: ApiService) {
    this.sub = apiService.getAssets('news.json').subscribe( res => {
      this.data = res;
    },
    err => {
      this.error = err;
    },
  );
  }
  */

  // option2: get data
  private data: Observable<any[]> ;

  constructor(private apiService: ApiService) {
    // this.data = apiService.getAssets('news.json');
    apiService.getAssets('news.json').then( res => {
      this.data = res;
    });
  }

  @ViewChild(AppModalComponent) comfirmModal: AppModalComponent;
  color: string;
  defaultColor = 'blue';

  /*showModalWithContent(id) {
    this.comfirmModal.item = this.data.find(item => item.id === id);
  }

  delItem(id) {
    if (id) {
      this.data = this.data.filter(item => {
        return item.id !== id;
      });
    }
  }*/
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
