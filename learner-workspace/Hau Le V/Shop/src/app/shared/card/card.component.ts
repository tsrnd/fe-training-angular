import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { LocalerService } from '../../core/service/localer.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item:any;
  constructor(private authService: AuthService, private localer: LocalerService) {}

  ngOnInit() {
  }

  onLike(){
    this.localer.saveFavProduct(this.item);
  }

  onDisLike(){
    this.localer.deleteFavProduct(this.item)
  }
}
