import { Component, OnInit, Input } from '@angular/core';
import { LocalerService } from '../../core/service/localer.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  myProducts:any[];
  itemDelete :any;
  name :any;
  title = "Favorite";

  constructor(private localer: LocalerService) { }

  ngOnInit() {
    this.myProducts = JSON.parse(this.localer.getLocal("listProducts"));
  }
  passDataModal(event){
    this.itemDelete = event.id;
    this.name = event.name;
  }
  DeleteItem(event){
    if (event==true){
      this.localer.deleteFavProduct({id:this.itemDelete});
      this.myProducts = JSON.parse(this.localer.getLocal("listProducts"));
    }
  }
}
