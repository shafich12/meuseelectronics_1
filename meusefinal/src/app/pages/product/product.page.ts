import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { Storage } from "@ionic/storage-angular";
import { ToastController } from '@ionic/angular';
import { CartService } from "../../services/cart.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  id : any = ""

  description: any = ""

  // product: any =
  //   { "name": "Air Pro Max", "image": "/assets/img/air.png", "price": "125.00", "logo": "/assets/img/nike.svg" };

  images: any = [
    { "image": "/assets/img/air.png" },
    { "image": "/assets/img/retro.png" },
    { "image": "/assets/img/air2.png" }
  ]

  sizes: any = [
    { "number": 41 , "selected": false}, { "number": 42, "selected": false },
     { "number": 43, "selected": true }, { "number": 45, "selected": false }, 
     { "number": 46, "selected": false }, { "number": 46.5, "selected": false },
  ]

  slideOpts = {
    spaceBetween: 10,
    slidesPerView: "auto",
    centeredSlides: false,
    initialSlide: 0, 
    speed: 500
  };

  product: any = {}


  constructor(private toast: ToastController, private productService: ProductsService, private activatedRoute: ActivatedRoute, private storage: Storage, private cartService: CartService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter(){
    this.productService.getProduct(this.id).then(
      (data) => {
        this.product = JSON.parse(data.data);
        this.description = this.product.description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '');
         
      }
    )
  }

  addCart(product){
    this.cartService.addToCart(product);
  }
}
