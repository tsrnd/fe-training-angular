import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from '../../core/service/api.service';
import { environment } from '../../../environments/environment';
export const type = environment.type;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data:any;
  public women:any;
  public men:any;
  public children:any;
  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.get(ENDPOINT.products)
    .subscribe(data =>{
      this.data = data;
      // this.women =  data.filter(element => {
      //   return element.type == type.women;
      // })
      
      this.women = this.data.filter(ele =>ele.type == type.women).filter((e,i)=>i<4);
      this.men = this.data.filter(ele =>ele.type == type.men).filter((e,i)=>i<4);
      this.children = this.data.filter(ele =>ele.type == type.child).filter((e,i)=>i<4);
      
    });
  }

}
