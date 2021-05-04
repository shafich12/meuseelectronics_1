import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  categories = []

  products: any = [
    { "name": "Air Pro", "image": "/assets/img/air.png", "price": 85 },
    { "name": "Air Retro", "image": "/assets/img/retro.png", "price": 125 },
    { "name": "Green", "image": "/assets/img/adidas2.png", "price": 96 },
    { "name": "Dark Mode", "image": "/assets/img/air2.png", "price": 110 },
    { "name": "White Shine", "image": "/assets/img/air3.png", "price": 145 },
    { "name": "Fuel Fusion", "image": "/assets/img/air4.png", "price": 69 },
  ];

  constructor(private productService: ProductsService) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter(){

    this.productService.getCategories().then((data: any) => {
      this.categories = JSON.parse(data.data);
    })
  }


}
