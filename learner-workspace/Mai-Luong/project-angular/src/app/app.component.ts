import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-angular';
  logo = 'HELLO ANGULAR';
  lifeCycleHookLists = [
    {
      id: 1,
      title: 'ngOnChanges()',
      content: 'Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object.onchange'
    },
    {
      id: 2,
      title: 'ngOnInit()',
      content: 'Initialize the directive/component after Angular first displays the data-bound properties.oninit'
    },
    {
      id: 3,
      title: 'ngDoCheck()',
      content: 'Detect and act upon changes that Angular can not or win not detect on its own.docheck'
    },
    {
      id: 4,
      title: 'ngAfterContentInit()',
      content: 'Respond after Angular projects external content into the component is view / the view that a directive is in.contentinit'
    },
    {
      id: 5,
      title: 'ngAfterContentChecked()',
      content: 'Respond after Angular checks the content projected into the directive/component.contenchecked'
    },
    {
      id: 6,
      title: 'ngAfterViewInit()',
      content: 'Respond after Angular initializes the component is views and child views / the view that a directive is in.viewinit'
    },
    {
      id: 7,
      title: 'ngAfterViewChecked()',
      content: 'Respond after Angular checks the component is views and child views / the view that a directive is in.viewchecked'
    },
    {
      id: 8,
      title: 'ngOnDestroy()',
      content: 'Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach.destroy'
    }
  ];

  removeItem(id) {
    this.lifeCycleHookLists = this.lifeCycleHookLists.filter(item => {
      return item.id !== id;
    });
  }
}
