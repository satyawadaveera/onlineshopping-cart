import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { OnlineShoppingComponent } from './online-shopping/online-shopping.component';
import { LoginComponent } from './online-shopping/login/login.component';
import { RegisterComponent } from './online-shopping/register/register.component';
import { ProductsComponent } from './online-shopping/products/products.component';
import { BikesComponent } from './online-shopping/products/bikes.component';
import { MobilesComponent } from './online-shopping/products/mobiles.component';
import { ShoesComponent } from './online-shopping/products/shoes.component';
import { Router, RouterModule } from '@angular/router';
import { SharedComponent } from './online-shopping/shared/shared.component';
import { environment } from '../environments/environment';
import { ShoppingCartService } from './online-shopping/shared/shopping-cart.service';
import { AddProductComponent } from './online-shopping/products/addProductForm.component';
@NgModule({
  imports: [BrowserModule, FormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'products', component: ProductsComponent,
        children: [
          { path: 'products/bikes', component: BikesComponent },
          { path: 'products/mobiles', component: MobilesComponent },
          { path: 'products/shoes', component: ShoesComponent }
        ]
      }
    ])
  ],
  declarations: [AppComponent, OnlineShoppingComponent, LoginComponent, RegisterComponent, ProductsComponent, BikesComponent, MobilesComponent, ShoesComponent, SharedComponent,AddProductComponent],
  bootstrap: [AppComponent],
  providers: [ShoppingCartService]
})
export class AppModule { }
