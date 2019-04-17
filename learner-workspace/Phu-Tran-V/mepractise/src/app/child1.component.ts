import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    // template: `
    // <button (click)="addForparent()">add</button>
    // <button (click)="subForparent()">sub</button>
    // `
    template: `<h3>{{ value }}</h3>`
})

export class Child1Component {
    // @Output() myclick = new EventEmitter<boolean>();
    // addForparent() {
    //     this.myclick.emit(true);
    // }
    // subForparent() {
    //     this.myclick.emit(false);
    // }
    value = 0;
}
