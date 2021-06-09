import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {CartService} from "../cart.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-chi-tiet-san-pham',
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrls: ['./chi-tiet-san-pham.component.css']
})
export class ChiTietSanPhamComponent implements OnInit {
  public product=history.state;
  public quantity=0;
  constructor(private cartService: CartService) { }
  onAdd(){
    this.cartService.addToCarts(this.product,this.quantity);
    window.alert(this.quantity+' Sản phẩm '+this.product.name+' đã được thêm vào giỏ hàng');
  }
  increase(){this.quantity++;}
  decrease(){this.quantity--;}
  ngOnInit(): void {
    this.cartService.load();
    this.product=history.state;
  }

}
