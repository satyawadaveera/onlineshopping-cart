import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/shopping-cart.service'
import { Product } from './product'
import { NgForm } from '@angular/forms';
/* import { Credentials } from '..../online-shopping/shared/credentials'; */
import { AddProductComponent } from './addProductForm.component';
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  bikesList: Product[];
  constructor(private shoppingCart: ShoppingCartService) { }
  addProduct: boolean = false;
  category: string = '';
  ngOnInit() {
    var x = this.shoppingCart.getProductsData("bikes");
    x.snapshotChanges().subscribe(item => {
      this.bikesList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.bikesList.push(y as Product);
      });
    })
  }
  addProducts(data) {
    this.addProduct = true;
    this.category = data;
    alert(data + " " + this.category)
    this.shoppingCart.addProducts("bikes", data);
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