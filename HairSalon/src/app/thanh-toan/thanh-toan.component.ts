import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.css']
})
export class ThanhToanComponent implements OnInit {
  public productList:{id:string, name:string, desc: string, price: number, rate: number}[]=this.cartService.getItems();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.load();
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
  }

}
