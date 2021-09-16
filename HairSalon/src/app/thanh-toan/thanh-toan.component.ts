import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CartService} from "../cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.css']
})
export class ThanhToanComponent implements OnInit {
  p: number = 1;
  public productList:{id:string, name:string, desc: string, price: number, rate: number}[]=this.cartService.getItems();
  constructor(private cartService: CartService,private router:Router) { }
  ngOnInit(): void {

  }
  total(){
    let result=0;
    for(let product of this.productList){
      result+=this.cartService.getQuantity(product.id)*product.price;
    }
    return result;
  }
  getQuantity(id: string){
    return this.cartService.getQuantity(id);
  }
  onCheckout(form: NgForm){
    this.router.navigate(['trang-chu'])
    this.cartService.clearCart()

  }

}
