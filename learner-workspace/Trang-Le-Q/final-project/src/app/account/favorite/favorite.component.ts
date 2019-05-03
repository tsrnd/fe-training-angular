import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  title = 'Your Favorite';
  data;
  show: boolean;

  constructor(
    private local: LocalerService
  ) { }

  ngOnInit() {
    this.data = this.local.getLocalStorage('favorite');
    if (this.data.length === 0) {
      this.show = true;
    }
  }
  delFavorite(id) {
    for ( let i = this.data.length - 1; i >= 0; i--) {
      if (this.data[i].id === id) {
        this.data.splice(i, 1);
        this.local.saveLocalStorage('favorite', this.data);
      }
    }
    location.reload();
  }

}
