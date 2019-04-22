import { Injectable } from '@angular/core';
import { LocalerService } from './localer.service';

@Injectable({
  providedIn: 'root'
})
export class AddFavoriteService {

  constructor(
    private local: LocalerService
  ) { }

  addFavorite() {
    let data = this.local.getLocalStorage('favorite');
    let arr = (data) ? data : [];
  }
}
