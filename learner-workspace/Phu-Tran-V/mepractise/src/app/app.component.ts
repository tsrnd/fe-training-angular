import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, animation, keyframes} from '@angular/animations';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myfirstanimation', [
      state('small', style({ height : '0px'})),
      state('large', style({ height : '100px'})),
      transition('small <=> large', animate('400ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  item;
  title = 'mepractise';
  state = 'small';
  isShow = true;
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  ngOnInit() {
    $('button').click(function ss() {
      alert();
    });
  }
}
