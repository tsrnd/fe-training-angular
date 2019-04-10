import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  ngStyle: NgStyle;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
