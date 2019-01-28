import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credentials } from '../shared/credentials';
import { ShoppingCartService } from '../shared/shopping-cart.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCart.resetForm();
  }
  onSubmit(registerForm: NgForm) {
    /* if(registerForm.value.$key==''){  */
    //alert(registerForm.value.$key);
    this.shoppingCart.AddLogin(registerForm.value);
    /* this.shoppingCart.addProducts(); */
    //alert(registerForm.value);
    //console.log(registerForm.value);
    /*  } */
    this.shoppingCart.resetForm();
  }
}