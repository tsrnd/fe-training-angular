import { Component, OnInit } from '@angular/core';
import { ENDPOINT, ApiService } from '../../core/service/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LocalerService } from '../../core/service/localer.service';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public data:any;
  img:string = "";
  name:string = "";
  brand:string = "";
  price:string = "";
  description:string="";
  products_related:any=[];
  constructor(private localer: LocalerService, private api: ApiService, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.api.get(ENDPOINT.products + '/' + parseInt(params.get('id')))
      .subscribe(
        data => {
          this.data = data;
          this.img = data.img;
          this.name = data.name;
          this.brand = data.brand;
          this.price = data.price;
          this.description = data.description;
          this.api.get(ENDPOINT.products).subscribe(data =>{
            this.products_related = data.filter(ele =>ele.brand == this.brand).filter((e,i)=>i<4);
          });
      });
      
    });
  }
  ngOnInit() {
    
  }

  AddMyFav(){
    this.localer.saveFavProduct(this.data);
  }
  DeleteMyFav(){
    this.localer.deleteFavProduct(this.data);
  }
  
}
