import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { HTTP } from "@ionic-native/http/ngx";
import { Storage } from "@ionic/storage";
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductModel } from "../models/product-model"
import { CartModel } from "../models/cart-model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseURL = "https://meuseelectronics.000webhostapp.com/wp-json/wc/v3";
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL21ldXNlIiwiaWF0IjoxNjE5NjU2MjM0LCJuYmYiOjE2MTk2NTYyMzQsImV4cCI6MTYyMDI2MTAzNCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.plP-f9O9hFd2C2YNLjwzqITwcHHhokF7pq6Wej14G5c';
  private cartDataArray: CartModel = {
    count: 0,
    productData: []
  }

  private cartData$: BehaviorSubject<CartModel> = new BehaviorSubject<any>({ count: 0, productData: [] });
  private totalAmount: number = 0;
  private totalAmount$ = new BehaviorSubject<number>(0);

  constructor(private http: HTTP,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastController: ToastController,
    private storage: Storage,
    private router: Router) {

    this.init();

    this.totalAmount = 0;
    this.storage.get('cart').then(data => {
      if (data) {
        this.cartDataArray = data;
        this.cartData$.next(this.cartDataArray);
        this.calculateTotal();
        console.log('this is good')
      }
    });
  }

  async init() {
    await this.storage.create();
  }

  async addToCart(product: any) {

    const loader = await this.loadingController.create({
      message: 'Adding to Cart...',
      animated: true,
      spinner: 'circles',
      backdropDismiss: false,
      showBackdrop: true
    });

    const alert = await this.alertController.create({
      header: 'Cart Updated',
      buttons: [
        {
          text: 'Continue',
          role: 'cancel',
          cssClass: 'continue',
          handler: () => {
            console.log('Product Added')
          }
        },
        {
          text: 'View Cart',
          cssClass: 'view-cart',
          handler: () => {
            this.router.navigateByUrl('/tabs/tab4').then();
          }
        }
      ],
      animated: true,
      message: "Product added to Cart",
      backdropDismiss: false,
      cssClass: 'add-product'
    });

    const toast = await this.toastController.create({
      message: 'Maximum products reached',
      header: 'Max',
      duration: 2000,
      position: 'bottom',
      animated: true,
      color: "warning",
      buttons: [
        {
          side: "end",
          role: "cancel",
          text: "Ok"
        }
      ]
    });

    await loader.present().then();

    // When cart is not empty
    if (this.cartDataArray.count !== 0) {

      // Calculate index
      const index = this.cartDataArray.productData.findIndex(p => p.id == product.id);

      if (index > -1) {

        // Limit the max purchasable quantity to 5 per product per order
        if (this.cartDataArray.productData[index].in_cart >= 5) {
          this.cartDataArray.productData[index].in_cart = 5;
          this.calculateTotal();
          this.storage.set('cart', { ...this.cartDataArray }).then();
          await loader.dismiss().then();
          await toast.present().then();
        } else {
          this.cartDataArray.productData[index].in_cart += 1;
          this.calculateTotal();
          this.storage.set('cart', { ...this.cartDataArray }).then();
          await loader.dismiss().then();
          await alert.present().then();
        }

        this.cartData$.next(this.cartDataArray);
      }

      else {
        this.cartDataArray.productData.push(product);
        const newProductIndex = this.cartDataArray.productData.findIndex(p => p.id == product.id);
        this.cartDataArray.productData[newProductIndex].in_cart = 1;
        this.calculateTotal();
        await loader.dismiss().then();
        await alert.present().then();
        this.cartDataArray.count = this.cartDataArray.productData.length;
        this.storage.set('cart', { ...this.cartDataArray }).then();
        this.cartData$.next(this.cartDataArray);
      }



    }
    else {
      this.cartDataArray.productData.push({ ...product, in_cart: 1 });
      this.cartDataArray.count = this.cartDataArray.productData.length;
      this.calculateTotal();

      this.storage.set('cart', { ...this.cartDataArray }).then();
      await loader.dismiss().then();
      await alert.present().then();
      this.cartData$.next(this.cartDataArray);
    }

  }

  removeFromCart(product: any){
    this.cartDataArray.productData = this.cartDataArray.productData.filter(p => p.id !== product.id);
    this.cartDataArray.count = this.cartDataArray.productData.length;
    this.calculateTotal();

    this.cartData$.next(this.cartDataArray);
    this.totalAmount$.next(this.totalAmount);
    this.storage.set('cart', { ...this.cartDataArray }).then();

    return this.cartDataArray.productData;
  }

  private calculateTotal(){
    this.totalAmount = 0;
    if(this.cartDataArray.productData.length === 0) {
      this.totalAmount = 0;
      this.totalAmount$.next(this.totalAmount);
      return;
    }

    this.cartDataArray.productData.forEach(p => {
      this.totalAmount += parseInt(p.price, 10) * p.in_cart;
    });

    this.totalAmount$.next(this.totalAmount);
  }

  updateQuantity(indexOfProduct, newInCartValue){
    this.cartDataArray.productData[indexOfProduct].in_cart = newInCartValue;
    this.calculateTotal();

    this.storage.set('cart', { ...this.cartDataArray }).then();
    this.cartData$.next(this.cartDataArray);
    this.totalAmount$.next(this.totalAmount);


  }

  private emptyCart(){
    this.cartDataArray = {
      count: 0,
      productData: []
    };

    this.calculateTotal();
    this.cartData$.next(this.cartDataArray);
     
  }

  get cartData(): Observable<any> {
    return this.cartData$.asObservable();
  }

  get cartTotal(): Observable<number> {
    return this.totalAmount$.asObservable();
  }


}
