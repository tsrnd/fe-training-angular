import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit {
  @Input() item:any;
  @Output() itemDelete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  delete_item(){
    this.itemDelete.emit({id: this.item.id, name:this.item.name});
  }
}
