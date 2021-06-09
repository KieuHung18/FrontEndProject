import { Component, OnInit } from '@angular/core';
import products from 'src/assets/data/products.json';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit {
  public products:{id:string, name:string, desc: string, price: number, rate: number}[] = [products[0],products[1],products[2]];
  constructor(private router: Router) { }
  onWatch(value: {id:string, name:string, desc: string, price: number, rate: number}){
    this.router.navigateByUrl('chi-tiet',{state: value})
  }
  onSanPham(id:string){
    // this.router.navigateByUrl('chi-tiet',{state: id})
  }
  ngOnInit(): void {
  }

}
