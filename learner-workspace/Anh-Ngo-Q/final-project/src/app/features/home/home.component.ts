import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topProducts;

  constructor(
    private http: ApiService
  ) { }

  ngOnInit() {
    this.http.get('/product-ranking').subscribe(v => this.topProducts = v);
  }
}
