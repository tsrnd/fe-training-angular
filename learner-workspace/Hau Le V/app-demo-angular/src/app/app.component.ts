import { Component } from '@angular/core';
// import { LocalerService} from './service/localer.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService, ENDPOINT } from './core/service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-demo-angular';
  // public tab:number = 0;
  // isFlg = [true,false,false];
  // changeTab(tab){
    //   this.tab = tab;
    //   this.isFlg=[false,false,false];
    //   this.isFlg[tab] = true
    // }
    // listItem = [
    //   {
    //     name: 'ngOnChange()',
    //     content: `<b>ngOnChange()</b><br>
    //     A lifecycle hook that is called when any data-bound property of a directive changes. Define an ngOnChanges() method to handle the changes.`,
    //   },
    //   {
    //     name: 'ngOnInit()',
    //     content: `<b>ngOnInit()</b><br>
    //     A lifecycle hook that is called when any data-bound property of a directive changes. Define an ngOnChanges() method to handle the changes.`,
    //   },
    //   {
    //     name: 'ngDoCheck()',
    //     content: `<b>ngDoCheck()</b><br>
    //     A lifecycle hook that is called when any data-bound property of a directive changes. Define an ngOnChanges() method to handle the changes.`,
    //   },
    //   {
    //     name: 'ngAfterContentInit()',
    //     content: `<b>ngAfterContentInit()</b><br>
    //     A lifecycle hook that is called when any data-bound property of a directive changes. Define an ngOnChanges() method to handle the changes.`,
    //   },
    //   {
    //     name: 'ngAfterContentChecked()',
    //     content: `<b>ngAfterContentChecked()</b><br>
    //     A lifecycle hook that is called when any data-bound property of a directive changes. Define an ngOnChanges() method to handle the changes.`,
    //   },
    //   {
    //     name: 'ngAfterViewInit()',
    //     content: `<b>ngAfterViewInit()</b><br>
    //     A lifecycle hook that is called when any data-bound property of a directive changes. Define an ngOnChanges() method to handle the changes.`,
    //   },
    //   {
    //     name: 'ngAfterViewChecked()',
    //     content: `<b>ngAfterViewChecked()</b><br>
    //     A lifecycle hook that is called when any data-bound property of a directive changes. Define an ngOnChanges() method to handle the changes.`,
    //   },
    //   {
    //     name: 'ngDestroyed()',
    //     content: `<b>ngDestroyed()</b><br>
    //     A lifecycle hook that is called when any data-bound property of a directive changes. Define an ngOnChanges() method to handle the changes.`,
    //   }
    // ];
    constructor(private api: ApiService) {
    }
    // dataStorage:any;
    // saveLocal(name,infor){
    //   this.localer.saveLocal(name.value,infor.value);
    // }
    // getLocal(name){
    //   this.dataStorage = this.localer.getLocal(name.value);
    // }
    // saveSession(name,infor){
    //   this.localer.saveSession(name.value,infor.value);
    // }
    // getSession(name){
    //   this.dataStorage = this.localer.getSession(name.value);
    // }
    // public arrContentCard= [];

    // getData(){
    //   this.api.get(ENDPOINT.tours).subscribe(data => this.arrContentCard = data);
    // }
}
