import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day5';
  lifeCycle = [
    {
      id: 0,
      name: 'ngOnChanges()',
      content: `Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
                Called before ngOnInit() and whenever one or more data-bound input properties change.`,
    },
    {
      id: 1,
      name: 'ngOnInit()',
      content: `Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.
                Called once, after the first ngOnChanges().`,
    },
    {
      id: 2,
      name: 'ngDoCheck()',
      content: `Detect and act upon changes that Angular can't or won't detect on its own.
                Called during every change detection run, immediately after ngOnChanges() and ngOnInit().`,
    },
    {
      id: 3,
      name: 'ngAfterContentInit()',
      content: `Respond after Angular projects external content into the component's view / the view that a directive is in.
                Called once after the first ngDoCheck().`,
    },
    {
      id: 4,
      name: 'ngAfterContentChecked()',
      content: `Respond after Angular checks the content projected into the directive/component.
                Called after the ngAfterContentInit() and every subsequent ngoCheck().`,
    },
    {
      id: 5,
      name: 'ngAfterViewInit()',
      content: `Respond after Angular initializes the component's views and child views / the view that a directive is in.
                Called once after the first ngAfterContentChecked().`,
    },
    {
      id: 6,
      name: 'ngAfterViewChecked()',
      content: `Respond after Angular checks the component's views and child views / the view that a directive is in.
                Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().`,
    },
    {
      id: 7,
      name: 'ngOnDestroy()',
      content: `Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
                Called just before Angular destroys the directive/component.`,
    },
  ];

  delItem(id) {
    // this.lifeCycle.splice(id - 1, 1);

    // this.lifeCycle = this.lifeCycle.filter(data => {
    //   return data.id !== e;
    // });
    if (id !== -1) {
      this.lifeCycle.splice(id, 1);
    }
  }
}
