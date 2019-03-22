import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from '../../core/service/api.service';
import { environment } from '../../../environments/environment';
export const type = environment.type;

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  public arrItem:any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get(ENDPOINT.products)
    .subscribe(data => this.arrItem = data.filter(element => element.type == type.child));
  }
}

