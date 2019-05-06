import { Component, OnInit } from '@angular/core';
import { LocalerService } from '../../../core/service/localer.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  keyLocal: any;
  valueLocal: any;
  getValue: string;
  constructor(
    private service: LocalerService
  ) { }

  ngOnInit() {
  }

  saveLocal() {
    if (this.keyLocal && this.valueLocal) {
      this.service.saveLocal(this.keyLocal, this.valueLocal);
      console.log(this.keyLocal);
      console.log(this.valueLocal);
    }
  }
  getLocal() {
    if (this.keyLocal) {
      this.getValue = this.service.getLocal(this.keyLocal);
      console.log(this.keyLocal);
    }
  }
  saveSession() {
    if (this.keyLocal && this.valueLocal) {
      this.service.saveSession(this.keyLocal, this.valueLocal);
      console.log(this.keyLocal);
      console.log(this.valueLocal);
    }
  }
  getSession() {
    if (this.keyLocal) {
      this.getValue = this.service.getSession(this.keyLocal);
      console.log(this.keyLocal);
    }
  }
}
