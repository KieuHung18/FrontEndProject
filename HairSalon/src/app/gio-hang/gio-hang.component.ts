import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.css']
})
export class GioHangComponent implements OnInit {
  p: number = 1;
  public productList:{id:string, name:string, desc: string, price: number, rate: number}[]=this.cartService.getItems();
  constructor(private cartService: CartService) { }
  onClear(){
    this.cartService.clearCart();
    this.productList=this.cartService.getItems();
  }
  total(){
    let result=0;
    for(let product of this.productList){
      result+=this.cartService.getQuantity(product.id)*product.price;
    }
    return result;
  }
  onCheckOut(form: NgForm){
    let monthOdd=[1,3,5,7,8,10,12];let monthEven=[2,4,6,9,11];
    if(typeof form.value.ngay =="number"&&typeof form.value.thang =="number"&&typeof form.value.gio =="number"&&typeof form.value.phut =="number"){
      if(monthEven.includes(form.value.thang)&&form.value.ngay>=1&&form.value.ngay<=30&&form.value.gio<=21&&form.value.gio>=7&&form.value.phut>=0&&form.value.phut<60){
        console.log(form.value.ngay);
        console.log(form.value.thang);
        console.log(form.value.gio);
        console.log(form.value.phut);
      }else{
      if(monthOdd.includes(form.value.thang)&&form.value.ngay>=1&&form.value.ngay<=31&&form.value.gio<21&&form.value.gio>7&&form.value.phut>=0&&form.value.phut<60){
        console.log(form.value.ngay);
        console.log(form.value.thang);
        console.log(form.value.gio);
        console.log(form.value.phut);
      }else{window.alert("Sai dữ liệu vui lòng nhập lại")}
      }
    }else{window.alert("Sai dữ liệu vui lòng nhập lại")}
  }
  remove(id: string){this.cartService.removeItems(id);}
  increase(id: string){this.cartService.increaseQuantity(id);}
  decrease(id: string){this.cartService.decreaseQuantity(id);}
  getQuantity(id: string){
    return this.cartService.getQuantity(id);
  }
  ngOnInit(): void {
  this.cartService.load();
  }

}
