import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(ModalComponent) comfirmModal: ModalComponent;

  deleteItemID;

  index = 0;

  listTab = [
    'home',
    'info',
    'contact'
  ];

  listColor = [
    'white',
    'blue',
    'green',
    'red'
  ];

  color = this.listColor[0];

  datas = [
    {
      id: 1,
      name: 'ngOnChanges()',
      description: 'Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.'
    },
    {
      id: 2,
      name: 'ngOninit()',
      description: 'Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/components input properties'
    },
    {
      id: 3,
      name: 'ngDoCheck()',
      description: 'Detect and act upon changes that Angular can t or won t detect on its own'
    },
    {
      id: 4,
      name: 'ngAfterContentInit()',
      description: 'Respond after Angular projects external content into the component s view / the view that a directive is in'
    },
    {
      id: 5,
      name: 'ngAfterContentChecked()',
      description: 'Respond after Angular checks the content projected into the directive/component'
    },
    {
      id: 6,
      name: 'ngAfterViewInit()',
      description: 'Respond after Angular initializes the component s views and child views / the view that a directive is in'
    },
    {
      id: 7,
      name: 'ngAfterViewChecked()',
      description: 'Respond after Angular checks the component s views and child views / the view that a directive is in'
    },
    {
      id: 8,
      name: 'ngOnDestroy()',
      description: 'Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks'
    },
  ];

  removeItem(confirmDelete) {
    if (confirmDelete) {
      this.datas = this.datas.filter(data => {
        return data.id !== this.deleteItemID;
      });
      this.deleteItemID = undefined;
    }
  }

  passDeleteItemToModal(itemID) {
    this.deleteItemID = itemID;
    this.comfirmModal.item = this.datas[this.deleteItemID];
  }
}
