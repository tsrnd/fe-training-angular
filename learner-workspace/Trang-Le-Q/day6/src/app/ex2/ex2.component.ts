import { Component, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { LocalerService } from '../feature/service/localer.service';
import { ApiService } from '../feature/service/api.service';
@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {

  constructor(private nameService: LocalerService,
    private apiService: ApiService) {
  }

  inputText: string;
  local: string;
  session: string;

  ngOnInit() {
  }
  saveLocalStorage() {
    this.nameService.saveLocalStorage(this.inputText);
  }
  getLocalStorage() {
    this.local = this.nameService.getLocalStorage();
  }
  saveSessionStorage() {
    this.nameService.saveSessionStorage(this.inputText);
  }
  getSessionStorage() {
    this.session = this.nameService.getSessionStorage();
  }
}
