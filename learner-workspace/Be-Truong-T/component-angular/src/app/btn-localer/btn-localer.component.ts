import { Component, OnInit, NgModule } from '@angular/core';
import { LocalerService } from './../../app/core/services/localer.service';


@Component({
  selector: 'app-btn-localer',
  templateUrl: './btn-localer.component.html',
  styleUrls: ['./btn-localer.component.scss']
})
export class BtnLocalerComponent implements OnInit  {
  keyInput: string;
  valueInput: any;

  constructor(private localerService: LocalerService) {
    this.keyInput = 'hello';
    this.valueInput = 'konnichiwa';
  }

  ngOnInit() {
  }

  saveLocal() {
    if (this.keyInput && this.valueInput) {
      this.localerService.saveLocalStorage(this.keyInput, this.valueInput);
    }
  }
  getLocal() {
    if (this.keyInput && this.valueInput) {
      this.localerService.getLocalStorage(this.keyInput);
    }
  }
  saveSession() {
    if (this.keyInput && this.valueInput) {
      this.localerService.saveSessionStorage(this.keyInput, this.valueInput);
    }
  }
  getSession() {
    if (this.keyInput && this.valueInput) {
      this.localerService.getSessionStorage(this.keyInput);
    }
  }

}
