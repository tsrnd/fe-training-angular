import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
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
