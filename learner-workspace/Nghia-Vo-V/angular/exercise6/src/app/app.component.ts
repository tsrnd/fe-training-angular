import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  datas = [
    {
      id: 1,
      name: 'ngOnChanges()',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis! Ut ea cumque placeat sit delectus provident, praesentium earum facere id mollitia quasi molestias accusantium, temporibus quod eligendi quos eius? ngOnChange()`,
    },
    {
      id: 2,
      name: 'ngOnInit()',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis! Ut ea cumque placeat sit delectus provident, praesentium earum facere id mollitia quasi molestias accusantium, temporibus quod eligendi quos eius? ngOnInit()`,
    },
    {
      id: 3,
      name: 'ngDoCheck()',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis! Ut ea cumque placeat sit delectus provident, praesentium earum facere id mollitia quasi molestias accusantium, temporibus quod eligendi quos eius? ngDoCheck()`,
    },
    {
      id: 4,
      name: 'ngAfterContentInit()',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis! Ut ea cumque placeat sit delectus provident, praesentium earum facere id mollitia quasi molestias accusantium, temporibus quod eligendi quos eius? ngAfterContentInit()`,
    },
    {
      id: 5,
      name: 'ngAfterContentChecked()',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis! Ut ea cumque placeat sit delectus provident, praesentium earum facere id mollitia quasi molestias accusantium, temporibus quod eligendi quos eius?  ngAfterContentChecked()`,
    },
    {
      id: 6,
      name: 'ngAfterViewInit()',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis! Ut ea cumque placeat sit delectus provident, praesentium earum facere id mollitia quasi molestias accusantium, temporibus quod eligendi quos eius? ngAfterViewInit()`,
    },
    {
      id: 7,
      name: 'ngAfterViewChecked()',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis! Ut ea cumque placeat sit delectus provident, praesentium earum facere id mollitia quasi molestias accusantium, temporibus quod eligendi quos eius? ngAfterViewChecked().`,
    },
    {
      id: 8,
      name: 'ngOnDestroy()',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis! Ut ea cumque placeat sit delectus provident, praesentium earum facere id mollitia quasi molestias accusantium, temporibus quod eligendi quos eius? ngOnDestroy()`,
    },
  ];

  delData(id: number) {
    this.datas = this.datas.filter(datas => {
      return datas.id !== id;
    });
  }
}
