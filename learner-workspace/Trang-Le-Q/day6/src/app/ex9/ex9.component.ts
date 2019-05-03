import { Component, OnInit } from '@angular/core';
import { ApiService } from '../feature/service/api.service';

@Component({
  selector: 'app-ex9',
  templateUrl: './ex9.component.html',
  styleUrls: ['./ex9.component.scss']
})
export class Ex9Component implements OnInit {
  lifeCycle: any[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getAssets('../../assets/assets.json').subscribe(data => this.lifeCycle = data);
    console.log(this.lifeCycle);
    
  }

}
