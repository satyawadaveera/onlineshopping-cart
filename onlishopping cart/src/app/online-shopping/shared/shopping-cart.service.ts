import { Injectable } from '@angular/core';
import { Credentials } from './credentials';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { Product } from '../products/product';
@Injectable()
export class ShoppingCartService {
  credentials: AngularFireList<any>;
  selectedCredential: Credentials = new Credentials();
  /* products: Product = new Product('a', 'b', 'c', 'd', 1, 2, 3); */
  productsList: AngularFireList<any>;
  mobilesList: AngularFireList<any>;
   shoesList: AngularFireList<any>;
   cartObject:AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }
  login: boolean = false;
  loginName: string = '';
  loginSucess:boolean=false;
  ngOnInit() {
    this.resetForm();
    //this.addProducts();
  }
  addProducts(category, data) {
    if (category == "bikes") {
      this.firebase.list("bikes").push({
        pimage: data.pimage,
        pname: data.pname,
        pcode: data.pcode,
        pavailiable: data.pavailiable,
        pprice: data.pprice,
        qty: 1,
        prating: data.prating
      });
      return true;
    }
    else if (category == "mobiles") {
      this.firebase.list("mobiles").push({
        pimage: data.pimage,
        pname: data.pname,
        pcode: data.pcode,
        pavailiable: data.pavailiable,
        pprice: data.pprice,
        qty: 1,
        prating: data.prating
      });
      return true;
    }
    else if (category == "shoes") {
      this.firebase.list("shoes").push({
        pimage: data.pimage,
        pname: data.pname,
        pcode: data.pcode,
        pavailiable: data.pavailiable,
        pprice: data.pprice,
        qty: 1,
        prating: data.prating
      });
      return true;
    }
  }
  removeProducts(key,category){
    if(category=="bikes")
        this.productsList.remove(key);
        else if(category=="mobiles")
        this.mobilesList.remove(key);
        else if(category=="shoes")
        this.shoesList.remove(key);
    }
    removeCart(key){
      this.cartObject.remove(key);
    }
  getData() {
    this.credentials = this.firebase.list("Credentials");
    return this.credentials;
  }
  getProductsData(data) {
    if(data=="bikes"){
      this.productsList = this.firebase.list("bikes");
    return this.productsList;
    }
    else if(data=="mobiles"){
      this.mobilesList = this.firebase.list("mobiles");
    return this.mobilesList;
    }
    else if(data=="shoes"){
      this.shoesList = this.firebase.list("shoes");
    return this.shoesList;
    }
  }
  getCartData(){
     this.cartObject = this.firebase.list("cart");
    return this.cartObject;
  }
  AddLogin(formData) {
    alert(formData);
    this.firebase.list("Credentials").push({
      username: formData.username,
      password: formData.password,
      email: formData.email
    });
    alert("sucess");
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.selectedCredential = {
      $key: null,
      username: '',
      password: '',
      email: ''
    }
  }
  addToCart(pimg,pnm,pcode,pavailiable,pqty,pprice,prating){
      this.firebase.list("cart").push({
        "pimage":pimg,
        "pname":pnm,
        "pcode":pcode,
        "pavailiable":pavailiable,
        "qty":pqty,
        "pprice":pprice,
        "prating":prating
      });
      return true;
    }
}