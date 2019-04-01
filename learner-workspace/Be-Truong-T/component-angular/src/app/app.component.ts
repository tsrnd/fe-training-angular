import { Component, OnInit, OnDestroy } from '@angular/core';
import { asTextData } from '@angular/core/src/view';
import {ApiService, API_DOMAIN, END_POINT} from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  descCart: any;
  title = 'erxercise-angular';
  listLifeCycleHooks = [
    {
      id: 0,
      name: 'ngOnChanges()',
      desc: 'Called before ngOnInit() and whenever one or more data-bound input properties change.'
    },
    {
      id: 1,
      name: 'ngOnInit()',
      desc: 'Called once, after the first ngOnChanges().'
    },
    {
      id: 2,
      name: 'ngDoCheck()',
      desc: 'Called during every change detection run, immediately after ngOnChanges() and ngOnInit().'
    },
    {
      id: 3,
      name: 'ngAfterContentInit()',
      desc: 'Called once after the first ngDoCheck().'
    },
    {
      id: 4,
      name: 'ngAfterContentChecked()',
      desc: 'Called after the ngAfterContentInit() and every subsequent ngDoCheck().'
    },
    {
      id: 5,
      name: 'ngAfterViewInit()',
      desc: 'Called once after the first ngAfterContentChecked().'
    },
    {
      id: 6,
      name: 'ngAfterViewChecked()',
      desc: 'Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().'
    },
    {
      id: 7,
      name: 'ngOnDestroy()',
      desc: 'Called just before Angular destroys the directive/component.'
    }
  ];

  private subscribe;
  news$: any;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.subscribe = this.api.get(END_POINT.listNews).subscribe();
    this.news$ = this.api.getAssets(END_POINT.newsJson);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  getCardClicking($event) {
    this.descCart = $event;
    console.log('Get Card Clicking in parent: ' + $event);
  }

  removeHook($event) {
      this.listLifeCycleHooks = this.listLifeCycleHooks.filter(element => {
      return element.id !== $event;
    });
  }


}
