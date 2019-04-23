import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  title = 'Your Favorite';
  data: any[];

  constructor(
    private local: LocalerService
  ) { }

  ngOnInit() {
    this.data = this.local.getLocalStorage('favorite');
  }

}
