import { Component, OnInit } from '@angular/core';
import { Credentials } from '../shared/credentials';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { Product } from './product'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private shoppingCart:ShoppingCartService) { }
  /* login:boolean=false;
  loginName:string=''; */
  cartList:Product[];
  totalBill=0;
  login=this.shoppingCart.login;
  ngOnInit() {
    console.log(this.shoppingCart.getData());
    var x = this.shoppingCart.getCartData();
    x.snapshotChanges().subscribe(item => {
      this.cartList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.cartList.push(y as Product);
      });
    })
  }
  removeProductCart(key){
    this.shoppingCart.removeCart(key);
  }
}