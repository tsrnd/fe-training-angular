import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private localerService: LocalerService) { }

  ngOnInit() {
  }

}
