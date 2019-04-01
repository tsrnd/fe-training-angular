import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { LocalerService } from '../app/core/service/localer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// tslint:disable-next-line:directive-class-suffix
export class AppComponent implements OnInit {
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
  dataPipe = [
    {
      id: 1,
      title: 'Cards are built with as little',
      // tslint:disable-next-line:max-line-length
      content: 'Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed. Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.'
    },
    {
      id: 1,
      title: 'Cards are built with as little',
      // tslint:disable-next-line:max-line-length
      content: 'Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed. Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.'
    },
    {
      id: 1,
      title: 'Cards are built with as little',
      // tslint:disable-next-line:max-line-length
      content: 'Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed. Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.'
    },
  ];
  keyLocal: any;
  valueLocal: any;
  getValue: string;

  ngOnInit() {
  }
  constructor(private service: LocalerService) { }

  // removeItem(id) {
  //   this.lifeCycleHookLists = this.lifeCycleHookLists.filter(item => {
  //     return item.id !== id;
  //   });
  // }

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
