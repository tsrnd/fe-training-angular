import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {

  descCart: any;
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

  constructor() { }

  ngOnInit() {
    console.log(this.listLifeCycleHooks);
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
