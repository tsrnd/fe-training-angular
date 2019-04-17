import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  tittle = 'Details';

  constructor(
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRouter.data.subscribe(v => console.log(v));
  }

}
