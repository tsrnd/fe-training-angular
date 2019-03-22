import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from '../../core/service/api.service';
import { environment } from '../../../environments/environment';
export const type = environment.type;

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
  public arrItem:any;
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.api.get(ENDPOINT.products)
    .subscribe(data => this.arrItem = data.filter(element => element.type == type.men));
  }
}
