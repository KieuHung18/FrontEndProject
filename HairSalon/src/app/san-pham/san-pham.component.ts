import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import products from 'src/assets/data/products.json';
import {CartService} from "../cart.service";

function  filterType(codeType: string): {id:string, name:string, desc: string, price: number, rate: number}[]{
  let result: {id:string, name:string, desc: string, price: number, rate: number}[]=products;
  return result.filter((x)=>x.id.substring(0,2) == codeType);
};
function  search(name: string): {id:string, name:string, desc: string, price: number, rate: number}[]{
  let result: {id:string, name:string, desc: string, price: number, rate: number}[]=products;
  return result.filter((x)=>x.name.toUpperCase() == name.toUpperCase());
};

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {
  p: number = 1;
  public productList:{id:string, name:string, desc: string, price: number, rate: number}[] = products;
  constructor(private cartService: CartService) { }
  onSearch(form: NgForm){
    this.productList=search(form.value.search.toString())
  }
  onAdd(product: {id:string, name:string, desc: string, price: number, rate: number}){
    this.cartService.addToCart(product);
    window.alert('Sản phẩm '+product.name+' đã được thêm vào giỏ hàng');
  }
  onWatch(value: string){
    console.log(value)
  }
  ngOnInit(): void {
  }

}
