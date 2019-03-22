import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {
  listData:any[];
  favProducts: any[];
  constructor() { 
    this.favProducts = JSON.parse(localStorage.getItem("listProducts")) || [];
    this.listData = JSON.parse(localStorage.getItem("listData")) || [];
  }
  isExist:boolean;
  updateUser(email,data){
    var isSuccess=false;
    this.listData.forEach(ele=>{
      if(!isSuccess&&ele.email==email&&ele.password==data.password){
        ele.firstName=data.firstName;
        ele.lastName=data.lastName;
        localStorage.setItem("listData",JSON.stringify(this.listData));
        isSuccess = true;
      }
    });
    return isSuccess;
  }
  saveLocal(value) {
    this.isExist = false;
    this.isExist = this.listData.find((item) => {
      return item.email == value.email
    });
    if (!this.isExist){
      this.listData.push(value);
      localStorage.setItem("listData",JSON.stringify(this.listData));
    }
    return !this.isExist;
  }

  getLocal(key="listData") {
    return localStorage.getItem(key);
  }

  notFavProduct(value):boolean{
    return !this.favProducts.find((item) => {
      return (value && item.id == value.id)
    });
  }

  saveFavProduct(value){
    if (this.notFavProduct(value)){
      this.favProducts.push(value);
      localStorage.setItem("listProducts",JSON.stringify(this.favProducts));
      return true;
    }
    return false;
  }

  deleteFavProduct(value){
    if (!this.notFavProduct(value)){
      this.favProducts.forEach((ele,index)=>{
        if(ele.id == value.id){
          this.favProducts.splice(index, 1);
        }
        localStorage.setItem("listProducts",JSON.stringify(this.favProducts));
      });
      return true;
    }
    return false;
  }

  saveSession(key, value) {
    if (typeof(value) === 'object') {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
  }
  getSession(key) {
    return sessionStorage.getItem(key);
  }
}
