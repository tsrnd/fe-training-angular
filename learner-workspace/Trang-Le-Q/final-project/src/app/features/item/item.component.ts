import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  category: string;

  @Input() data: any[];
  constructor() { }

  ngOnInit() {
    
    switch (this.data.categoryID) {
      case 1:
        this.category = 'woman';
        break;
      case 2:
        this.category = 'man';
        break;
      case 3:
        this.category = 'kids';
        break;
    }
  }

}
