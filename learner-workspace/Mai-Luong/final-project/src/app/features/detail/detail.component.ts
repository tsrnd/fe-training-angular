import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { AuthService } from '../../core/service/auth.service';
import { ShareService } from '../../core/service/share.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id;
  isLoginIn: boolean;
  data: any;
  dataProduct: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private apiService: ApiService,
    private authService: AuthService,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    this.isLoginIn = this.authService.isLoggedIn;
    this.shareService.likeFun(this.id);
    this.apiService.getAssets('assets/files/data.json').toPromise().then(
      obj =>  {
        this.activeRoute.paramMap.subscribe(param => {
          this.data = obj[+param.get('id') - 1];
        });
      }
    );
    this.apiService.getAssets('assets/files/data.json').subscribe(
      obj => this.dataProduct = obj
    );
  }

}
