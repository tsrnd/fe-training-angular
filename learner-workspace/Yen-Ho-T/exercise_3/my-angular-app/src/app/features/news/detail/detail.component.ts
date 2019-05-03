import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../core/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DeactiveDialogService } from 'src/app/core/service/deactive-dialog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  item: any;
  constructor(
    private acroute: ActivatedRoute,
    private apiService: ApiService,
    private dialogService: DeactiveDialogService
  ) {
    apiService.getAssets('news.json').then( ob => {
      this.acroute.paramMap.subscribe(params => {
      this.item = ob[params.get("id")];
      })
    }).catch( (err) => {
      console.log(err)        
    });
  }

  ngOnInit() {
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (!this.item) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }
}
