import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  events$: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.api.getAssets('assets/news.json').subscribe(data => {
    //   this.cards = data;
    //   console.log(this.cards); });
    this.events$ = this.api.getAssets('assets/news.json');
  }

}
