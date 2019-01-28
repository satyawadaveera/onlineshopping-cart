import { Component, OnInit } from '@angular/core';
 import { ShoppingCartService } from '../shared/shopping-cart.service'
import { Product } from './product'
import { NgForm } from '@angular/forms';
import { AddProductComponent } from './addProductForm.component';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobilesList:Product[];
  constructor(private shoppingCart:ShoppingCartService) { }
  addProduct:boolean;
  category:string='';
  ngOnInit() {
    var x=this.shoppingCart.getProductsData("mobiles");
    x.snapshotChanges().subscribe(item=>{
      this.mobilesList=[];
      item.forEach(element=>{
        var y=element.payload.toJSON();
        y["$key"]=element.key;
        this.mobilesList.push(y as Product);
      });
    })
  }
   addProducts(data){
     this.addProduct=true;
     this.category=data;
     alert(data+" "+this.category)
    var status=this.shoppingCart.addProducts("mobiles",data);
    this.addProduct=false;
  } 
  add(form:NgForm){
    alert(form);
  }
  removeProduct(key,category){
    this.shoppingCart.removeProducts(key,category);
  }
  AddToCart(pimg,pnm,pcode,pavailiable,pqty,pprice,prating){
    this.shoppingCart.addToCart(pimg,pnm,pcode,pavailiable,pqty,pprice,prating);
  }
}