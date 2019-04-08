import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { AppModalComponent } from 'src/app/core/app-modal/app-modal.component';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }
  private data: Observable<any[]>;

  @ViewChild(AppModalComponent) comfirmModal: AppModalComponent;

  ngOnInit() {
    this.apiService.getAssets('data.json').subscribe(res => {
      this.data = res;
    });
  }


  showModalWithContent(id) {
    this.comfirmModal.item = this.data.find(item => item.id === id);
  }

  delItem(id) {
    if (id) {
      this.data = this.data.filter(item => {
        return item.id !== id;
      });
    }
  }
}
