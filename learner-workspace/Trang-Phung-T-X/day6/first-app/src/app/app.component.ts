import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lifecycle Hooks';
  data = [
    {
      id: 1,
      title: 'NgOnChanges()',
      content: `Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of
    current and previous property values.
    Called before ngOnInit() and whenever one or more data-bound input properties change.`
    },
    {
      id: 2,
      title: 'NgOnInit()',
      content: `
    Initialize the directive/component after Angular first displays the data-bound properties and sets the
    directive/component's input properties.
    Called once, after the first ngOnChanges().`
    },
    {
      id: 3,
      title: 'NgDoCheck()',
      content: `Detect and act upon changes that Angular can't or won't detect on its own.
    Called during every change detection run, immediately after ngOnChanges() and ngOnInit().`
    },
    {
      id: 4,
      title: 'NgAfterContentInit()',
      content: `Respond after Angular projects external content into the component's view / the view that a directive is in.
    Called once after the first ngDoCheck().`},
    {
      id: 5,
      title: 'NgAfterContentChecked()',
      content: `Respond after Angular checks the content projected into the directive/component.
    Called after the ngAfterContentInit() and every subsequent ngDoCheck().`},
    {
      id: 6,
      title: 'NgAfterViewInit()',
      content: `Respond after Angular initializes the component's views and child views / the view that a directive is in.
    Called once after the first ngAfterContentChecked().`},
    {
      id: 7,
      title: 'NgAfterViewChecked()',
      content: `Respond after Angular checks the component's views and child views / the view that a directive is in.
    Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().`},
    {
      id: 8,
      title: 'Destroy()',
      content: `Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event
    handlers to avoid memory leaks.
    Called just before Angular destroys the directive/component.`}
  ];

  delItem(id) {
    this.data = this.data.filter(data => {
      return data.id !== id;
    });
  }
}

