import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-phutag',
  templateUrl: './phutag.component.html',
  styleUrls: ['./phutag.component.sass']
})
export class PhutagComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
