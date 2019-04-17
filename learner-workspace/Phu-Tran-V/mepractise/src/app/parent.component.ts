import { Component, ViewChild } from '@angular/core';
import { Button } from '../../node_modules/protractor';
import { Child1Component } from './child1.component';

@Component({
    selector: 'app-parent',
    // template: `
    // <h3>{{ value }} </h3>
    // <app-child (myclick)= "changeValue($event)"></app-child>
    // `
    template: `
    <button (click)= "onAddForChild();" >add for child</button>
    <app-child #child></app-child>
    `
})

export class ParentComponent {
    @ViewChild(Child1Component)
    myChild: Child1Component;
    onAddForChild() {
        this.myChild.value++;
    }
}
    // value = 0;
    // changeValue(isAdd: boolean) {
    //     if (isAdd) {
    //         this.value = this.value + 1;
    //     } else {
    //         this.value = this.value - 1;
    //     }
    // }
// }
