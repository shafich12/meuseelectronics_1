import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.page.html',
  styleUrls: ['./mosaic.page.scss'],
})
export class MosaicPage implements OnInit {

  id : any = "";
  catTitle : any = "";


  products: any = [
 
  ];
  
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter(){
    this.productService.getCategory(this.id).then(
      (data: any) => {
        this.catTitle = JSON.parse(data.data).name;
      }
    );

    this.productService.getCategoryProducts(this.id).then(
      (data: any) => {
        this.products = JSON.parse(data.data)
      } );
  }

}
