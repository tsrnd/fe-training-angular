import { Component, OnInit, Input } from '@angular/core';
import { ApiService, ENDPOINT } from '../../core/service/api.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor( private api: ApiService ) { }
  @Input() arrContentCard:any;
  ngOnInit() {
  }
  getData(){
    this.api.get(ENDPOINT.tours).subscribe(data => this.arrContentCard = data);
  }
}
