import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cart-model';
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  products: any = [];
  cart: CartModel;
  total: number;
  
  // products: any = [
  //   { "name": "Air Pro", "image": "/assets/img/air.png", "price": "125.00", "amount" : 1 },
  //   { "name": "Air Retro", "image": "/assets/img/retro.png", "price": "85.00", "amount" : 2 },
  //   { "name": "Green Coast", "image": "/assets/img/adidas2.png", "price": "134.00", "amount" : 1 }
  // ];

  constructor(private cartService: CartService, private storage: Storage) { }

  ngOnInit() {
    this.cartService.cartData.subscribe(data => {
      this.cart = data;
    });

    this.cartService.cartTotal.subscribe(data => {
      this.total = data;
    });
  }

  ionViewWillEnter(){

    // this.cartService.getCart().subscribe(
    //   (data) => {
    //     this.products = data;
    //     console.log(this.products);
    //   }
    // )
  }

  // updateQuantity(p, value, index){
    

  //   if(value <= 0){
  //     this.cartService.removeFromCart(p)
  //   }else{
  //     const updatedCartValue = value;
  //     this.cartService.updateQuantity(index, updatedCartValue);
  //   }
    
  // }

}
