import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalService: any;

  constructor() { }
  // removeItemEvent: any;
  @Input('title') item; 
  // tslint:disable-next-line:no-output-rename
  @Output('removeItem') removeItemEvent = new EventEmitter();
  // @ViewChild('close') closeBtn: ElementRef;

  ngOnInit() {
  }


  removeItem(id) {
    this.removeItemEvent.emit(id);
    // this.closeBtn.nativeElement.click();
  }
  // ngOnDestroy(): void {
  //   console.log(this.closeBtn.nativeElement);
    
  //   // var myEl = angular.element( document.querySelector( 'modal-backdrop' ));
  //   // myEl.clear();
  //   // Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
    
  // }
}
