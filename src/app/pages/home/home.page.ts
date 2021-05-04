import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { ProductPageRoutingModule } from '../product/product-routing.module';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slidesOptions = {
    // initialSlide: 0,
    // direction: 'horizontal',
    // speed: 300,
    // spaceBetween: 8,
    // slidesPerView: 1.5,
    // freeMode: true,
    // loop: true,
    // autoplay:true
    initialSlide:0,
    speed:400,
    loop: true,
    autoplay: true,
  };

  products = []
  
  categories = []

  constructor(private productService: ProductsService, private cartService: CartService) { }

  gallery: any = [
    { "id": "1", "name": "Urban Running", "image": "/assets/img/sport.jpg" },
    { "id": "1", "name": "Fitness", "image": "/assets/img/sport2.jpg"},
    { "id": "1", "name": "Yoga", "image": "/assets/img/sport3.jpg" },
  ];
  
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadProducts();
    this.loadCategories();
  }

  async loadProducts(){
    await this.productService.getProducts().then((data: any) => {
      this.products = JSON.parse(data.data);
    });
  }

  async loadCategories(){
    await this.productService.getCategories().then((data: any) => {
      this.categories = JSON.parse(data.data);
    })
  }



}
