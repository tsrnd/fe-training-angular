import { Component } from '@angular/core';
import { from } from 'rxjs';
import { PowerPipe } from './feature/pipe/power.pipe';
import { ApiService } from './feature/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(private apiService: ApiService) {
    // this.reset();
  }
  title = 'day6';
  color: string;
  birthday = new Date(1996, 3, 29);
  toggle = true;
  datas = [
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
                Called during every change detection run, immediately after ngOnChanges() and ngOnInit().`
    }
  ];

  // get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  // toggleFormat() { this.toggle = !this.toggle; }

  // powerPipe = new PowerPipe;
  // power = 1;
  // factor = 5;
  // heroes: any[] = [];
  // canFly = true;

  // addHero(name: string) {
  //   name = name.trim();
  //   if (!name) { return; }
  //   let hero = {name, canFly: this.canFly};
  //   this.heroes.push(hero);
  // }

  // reset() { this.heroes = []; }
  // this.apiService.get();
  abc() {
    this.apiService.getAssets('../assets/assets.json').subscribe(data => console.log(data));
    // this.apiService.getConfigResponse(ENDPOINT.users).subscribe(data => console.log(data));
  }
}
