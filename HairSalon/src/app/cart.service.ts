import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: {id:string, name:string, desc: string, price: number, rate: number}[]= [];
  quantity: number[]=[];
  addToCart(product: {id:string, name:string, desc: string, price: number, rate: number}) {
      if(this.items.find(d => d.id==product.id)==undefined){
        this.items.push(product);
        localStorage.setItem('items', JSON.stringify(this.items));
        this.quantity.push(1);
        localStorage.setItem('quantity', JSON.stringify(this.quantity));
      }else{
        this.increaseQuantity(product.id);
    }
  }
  addToCarts(product: {id:string, name:string, desc: string, price: number, rate: number},qantity:number) {
    if(this.items.find(d => d.id==product.id)==undefined){
      this.items.push(product);
      localStorage.setItem('items', JSON.stringify(this.items));
      this.quantity.push(qantity);
      localStorage.setItem('quantity', JSON.stringify(this.quantity));
    }else{
      this.increaseQuantitys(product.id,qantity);
    }
  }

  getQuantity(id: string){
    let index= this.items.findIndex(d => d.id==id);
    return this.quantity[index];
  }
  increaseQuantity(id: String){
    let index= this.items.findIndex(d => d.id==id);
    this.quantity[index]++;
    localStorage.setItem('quantity', JSON.stringify(this.quantity));
  }
  increaseQuantitys(id: String,quantity:number){
    let index= this.items.findIndex(d => d.id==id);
    this.quantity[index]+=quantity;
    localStorage.setItem('quantity', JSON.stringify(this.quantity));
  }
  decreaseQuantity(id: string){
    let index= this.items.findIndex(d => d.id==id);
    if(this.quantity[index]==1){
      this.removeItems(id);
    }else{
    this.quantity[index]--;
    localStorage.setItem('quantity', JSON.stringify(this.quantity));
    }
  }
  removeItems(id: string){
    let index= this.items.findIndex(d => d.id==id);
    this.items.splice(index,1);
    this.quantity.splice(index,1);
    localStorage.setItem('quantity', JSON.stringify(this.quantity));
    localStorage.setItem('items', JSON.stringify(this.items));
  }
  getItems() {
    this.items = JSON.parse(<string>localStorage.getItem('items'));
    this.quantity = JSON.parse(<string>localStorage.getItem('quantity'));
    return this.items;
  }
  clearCart() {

    this.items = [];
    this.quantity = [];
    localStorage.setItem('items', JSON.stringify(this.items));
    localStorage.setItem('quantity', JSON.stringify(this.quantity));
    return this.items;
  }
  constructor() { }
}
