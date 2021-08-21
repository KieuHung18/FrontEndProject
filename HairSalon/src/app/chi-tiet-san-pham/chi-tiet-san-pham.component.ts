import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import products from 'src/assets/data/products.json';
function get(id: string|null): {id:string, name:string, desc: string, price: number, rate: number}{
  let result: {id:string, name:string, desc: string, price: number, rate: number}[]=products;
  return result.filter((x)=>x.id == id)[0];
};
@Component({
  selector: 'app-chi-tiet-san-pham',
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrls: ['./chi-tiet-san-pham.component.css']
})
export class ChiTietSanPhamComponent implements OnInit {
  public product:{id:string, name:string, desc: string, price: number, rate: number}={id:'c01', name:'', desc: '', price: 0, rate: 0};
  public quantity=0;
  rate: number=0;
  constructor(private cartService: CartService,private router: Router, private route: ActivatedRoute) { }
  onAdd(){
    if(this.quantity>1){
    this.cartService.addToCarts(this.product,this.quantity);
    window.alert(this.quantity+' Sản phẩm '+this.product.name+' đã được thêm vào giỏ hàng');
    }else{window.alert("Không có sản phẩm")}
  }
  setRate(rate: number) {
    this.rate=rate;
  }
  increase(){this.quantity++;}
  decrease(){this.quantity--;}
  ngOnInit(): void {
    if(get(this.route.snapshot.paramMap.get("id"))==undefined){
      this.router.navigateByUrl('/404');
    }else{
      this.product=get(this.route.snapshot.paramMap.get("id"))
    }
  }

}
