import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-chi-tiet-san-pham',
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrls: ['./chi-tiet-san-pham.component.css']
})
export class ChiTietSanPhamComponent implements OnInit {
  public product=history.state;
  public quantity=0;
  rate: number=0;
  constructor(private cartService: CartService) { }
  onAdd(){
    this.cartService.addToCarts(this.product,this.quantity);
    window.alert(this.quantity+' Sản phẩm '+this.product.name+' đã được thêm vào giỏ hàng');
  }
  setRate(rate: number) {
    this.rate=rate;
  }
  increase(){this.quantity++;}
  decrease(){this.quantity--;}
  ngOnInit(): void {
    this.cartService.load();
    if(history.state.id!=undefined){this.product=history.state;this.cartService.setProduct(history.state)}
    else{this.product=this.cartService.getProduct()}
  }

}
