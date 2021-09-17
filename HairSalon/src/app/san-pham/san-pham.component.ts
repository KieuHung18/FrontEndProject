import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import products from 'src/assets/data/products.json';
import {CartService} from "../cart.service";
import {ActivatedRoute, Router} from "@angular/router";

function  filterType(codeType: string|null): {id:string, name:string, desc: string, price: number, rate: number}[]{
  let result: {id:string, name:string, desc: string, price: number, rate: number}[]=products;
  return result.filter((x)=>x.id.substring(0,1) == codeType);
};
function  search(name: string): {id:string, name:string, desc: string, price: number, rate: number}[]{
  let result: {id:string, name:string, desc: string, price: number, rate: number}[]=products;

  let count = name.split("").length;
  return result.filter((x)=>x.name.substring(0,count).toUpperCase() == name.toUpperCase());
};

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {
  p: number = 1;
  public productList:{id:string, name:string, desc: string, price: number, rate: number}[] = [];

  constructor(private cartService: CartService,private router: Router,private route: ActivatedRoute) { }
  onSearch(form: NgForm){
   if (form.value.search.toString() == ""){
     this.productList=filterType(this.route.snapshot.paramMap.get("type"));
   }
   else {
     this.productList = search(form.value.search.toString())
   }

  }
  onAdd(product: {id:string, name:string, desc: string, price: number, rate: number}){
    this.cartService.addToCart(product);
    window.alert('Sản phẩm '+product.name+' đã được thêm vào giỏ hàng');
  }
  onWatch(id: string){
    this.router.navigateByUrl('chi-tiet/'+id);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(filterType(params.get("type")).length==0){
        this.router.navigateByUrl('/404');
      }else{
        this.productList=filterType(params.get("type"));
      }
    })
  }

}
