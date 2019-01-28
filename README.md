
# onlineshopping-cart
Online Shopping cart is a simple component used to creat a Shopping-Cart which is designed in angular.
<p align="center">
    <img  alt="Register" src="Images/rigister.PNG">
</p>
<p align="center">
    <img  alt="Login" src="Images/Loginpage.PNG">
</p>
<p align="center">
    <img  alt="Cartpage" src="Images/cart.PNG">
</p>
To preview demo of Dynamic form creation by using FireBase DataBase Component, [Click here](https://angulso8qjg.stackblitz.io/products/)
## Using the complete angular component
Download the src folder from Online Shopping-Cart folder and install the required packages and run the application.

### Installing

```
> npm install
```

### Run server

```
> ng serve
```

## Adding Online Shopping-Cart component in your project
 Download the Online Shopping-Cart component from Online Shopping-Cart/src/app folder to your angular project and include required components from angular.

```
### ImagesJsonFormate Interface

```typescript
```
#### Interface Description
- **Registerpage** it provides the RigisterForm,
- **Loginpage**   it provides the LoginForm,
- **Cartpage**  it provides the Shopping cart details.

### Example FireBase DataBase
```  
## How it works
  
   User will Rigister in rigisterform the data stores in firebase database then it will redirect to that data to the login page
   so user login after rigister he will be valid user other wise it will display invaliduser after user successfully login the shoppingcart willbe displayed then user 
   if user want any item in the cart click button addto cart then the item will display in cartpage along with itemprice also   the data in property binding format
   i.e like above mentioned pages
    then FireBase DataBase will hold this information and gives to ****
    
In OnlineShoping-Cart creation, we use *#key value to iterate the FireBase Data.Inside the forms and cartpage ,will display the Cart details.
