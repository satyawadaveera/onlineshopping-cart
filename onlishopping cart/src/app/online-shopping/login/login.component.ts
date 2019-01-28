import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credentials } from '../shared/credentials';
import { ShoppingCartService } from '../shared/shopping-cart.service'
import { Router} from '@angular/router';
import { OnlineShoppingComponent } from '../online-shopping.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userExists: boolean = false;
  un:string='';
  constructor(private shoppingCart: ShoppingCartService,private router: Router,private loginout:OnlineShoppingComponent) { }
  credentials: Credentials[];
  loginSucess:boolean=false;
  ngOnInit() {
    var x = this.shoppingCart.getData();
    x.snapshotChanges().subscribe(item => {
      this.credentials = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.credentials.push(y as Credentials);
      })
    });
  }
  onSubmit(loginForm: NgForm) {
    alert(loginForm.value.username)
    this.credentials.forEach(objects => {
      console.log(objects.username + " " + objects.password + " usernames");
      if ((objects.username == loginForm.value.username) && (objects.password == loginForm.value.password)) {
        this.userExists = true;
        this.shoppingCart.loginName=loginForm.value.username;
        this.un=loginForm.value.username;
      }
    })
    this.testUser();
    this.userExists = false;
  }
  testUser() {
    if (this.userExists == true){
      alert("valid user");
      this.shoppingCart.login=true;
      this.router.navigate(['products']);
      this.loginSucess=true;
      this.shoppingCart.loginSucess=true;
      this.loginout.loginLogout=false;
    }
    else
      alert("invalid user");
      //this.shoppingCart.login=false;
  }
}