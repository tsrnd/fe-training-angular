import { Component, OnInit, Input } from '@angular/core';
import { CompactPipe } from '../feature/pipe/compact.pipe';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('data') data;

}
