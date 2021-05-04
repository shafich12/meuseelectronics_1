import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  filtered = [];
  showSkeleton: boolean;
  touched: boolean;

  products: any = [
    { "name": "Air Pro Max 2005", "image": "/assets/img/air.png", "price": 125 },
    { "name": "Air Retro Should", "image": "/assets/img/retro.png", "price": 125 },
    { "name": "Dark Mode", "image": "/assets/img/air2.png", "price": 125 }
  ];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  onSearchChange(e){
    this.filtered = [];
    this.showSkeleton = true;
    this.touched = false;


    this.productsService.searchProducts(e.target.value).then(
      (data: any) => {
        let results = JSON.parse(data.data);

        if(results.length <= 0) {
          this.touched = true;
        } else {
          this.touched = false;
        }

        this.showSkeleton = false;
        this.filtered = results
      }).catch(
        (error) => {
          alert(error.error);
        }
      )
  }

}
