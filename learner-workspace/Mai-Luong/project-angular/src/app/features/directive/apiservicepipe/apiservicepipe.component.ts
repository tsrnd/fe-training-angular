import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from '../../../api.service';
import { LocalerService } from '../../../core/service/localer.service';

@Component({
  selector: 'app-apiservicepipe',
  templateUrl: './apiservicepipe.component.html',
  styleUrls: ['./apiservicepipe.component.scss']
})
export class ApiservicepipeComponent implements OnInit {
  dataPipes: any;
  error: any;
  constructor(private service: LocalerService, private apiService: ApiService) {
    this.apiService.getAssets('../assets/files/new.json').subscribe(obj => this.dataPipes = obj, error => this.error = error);
  }

  ngOnInit() {
  }

}
