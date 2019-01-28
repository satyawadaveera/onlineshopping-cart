import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service'
import { Product } from './product'
import { NgForm } from '@angular/forms';
/* import { Credentials } from '..../online-shopping/shared/credentials'; */
import { AddProductComponent } from './addProductForm.component';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  shoesList: Product[];
  constructor(private shoppingCart: ShoppingCartService) { }
  addProduct: boolean = false;
  category: string = '';
  ngOnInit() {
    var x = this.shoppingCart.getProductsData("shoes");
    x.snapshotChanges().subscribe(item => {
      this.shoesList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.shoesList.push(y as Product);
      });
    })
  }
  addProducts(data) {
    this.addProduct = true;
    this.category = data;
    alert(data + " " + this.category)
    this.shoppingCart.addProducts("shoes", data);
    this.addProduct=false;
  }
  add(form: NgForm) {
    alert(form);
  }
  removeProduct(key, category) {
    this.shoppingCart.removeProducts(key, category);
  }
   AddToCart(pimg,pnm,pcode,pavailiable,pqty,pprice,prating){
    this.shoppingCart.addToCart(pimg,pnm,pcode,pavailiable,pqty,pprice,prating);
  }
}