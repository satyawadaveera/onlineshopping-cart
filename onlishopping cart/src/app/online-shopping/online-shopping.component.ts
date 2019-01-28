import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shared/shopping-cart.service'
@Component({
  selector: 'app-online-shopping',
  templateUrl: './online-shopping.component.html',
  styleUrls: ['./online-shopping.component.css']
})
export class OnlineShoppingComponent implements OnInit {
  constructor(private shoppingCart:ShoppingCartService) { }
  ngOnInit() {
  }
Lname:string=this.shoppingCart.loginName;
loginLogout:boolean=true;
}