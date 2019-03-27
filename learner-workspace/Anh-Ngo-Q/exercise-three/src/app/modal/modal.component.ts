import { Component, OnInit, EventEmitter, ViewChild, ElementRef, Input, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input('data') item;
  @Output('removeData') removeItemEvent = new EventEmitter();

  @ViewChild('closeModal') closeBtn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.removeItemEvent.emit(this.item.id);
  }


  ngOnDestroy(): void {
    this.closeBtn.nativeElement.click();
  }
}
