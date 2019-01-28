import { Component, OnInit,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { Product } from './product'
@Component({
  selector: 'app-addProduct',
  templateUrl: './addProductForm.component.html'
})
export class AddProductComponent implements OnInit {
  @Input() categoryProduct:string;
  formShow:boolean=true;
  constructor(private shoppingCart:ShoppingCartService) { }
  prod=new Product('','','','','','','');
  ngOnInit() {
  }
  add(form){
    alert("insert to db"+" "+this.categoryProduct+" "+form.pimage+" "+form.pname);
    this.shoppingCart.addProducts(this.categoryProduct,form);
    this.formShow=false;
    alert("product added sucessfully");
  }
}