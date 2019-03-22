import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from '../shared/components/modal/modal.component';
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  public index:number;
  itemDelete: any;
  indexItem: number;
  name: string;
  @Input() listItem: any;
  constructor() { }
  public item:string;
  ngOnInit() {
  }
  passDataModal(event){
    this.itemDelete = event.item;
    this.name = this.itemDelete.name
    this.indexItem = event.indexItem;
  }
  DeleteLast(index){
    this.listItem.splice(index, 1);
  }
}
