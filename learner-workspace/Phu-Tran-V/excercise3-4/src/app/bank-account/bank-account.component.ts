import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  template: `
  Bank Name: {{bankName}}
  Account Id: {{id}}
  `,
  styleUrls: ['./bank-account.component.sass']
})
export class BankAccountComponent implements OnInit {
  @Input() bankName: string;
  @Input('account-id') id: string;
  normalizedBankName: string;
  constructor() { }

  ngOnInit() {
  }

}
