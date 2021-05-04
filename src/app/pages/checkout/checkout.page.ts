import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { ProductsService } from "../../services/products.service";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  total: number = 0;
  id: any;
  product: any = {

  }
  reference: number= 0;
  checkoutForm: FormGroup;

  products: any = [
    { "name": "Air Pro", "image": "/assets/img/air.png", "price": "125.00", "amount" : 1 },
    { "name": "Air Retro", "image": "/assets/img/retro.png", "price": "85.00", "amount" : 2 },
    { "name": "Green Coast", "image": "/assets/img/adidas2.png", "price": "134.00", "amount" : 1 }
  ];
  
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private productsService: ProductsService, private alertController: AlertController, private router: Router) {
    this.reference = Math.floor(Math.random() * 1000000000 + 1);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.checkoutForm = this.formBuilder.group({
      email: [null, [Validators.required]],
    });
  }

  ionViewWillEnter(){
    this.productsService.getProduct(this.id).then(
      (data: any) => {
        this.product = JSON.parse(data.data);
        this.total = this.product.price;
      }
    )
  }

  async paymentCancel() {

    const alert = await this.alertController.create({
      header: 'Payment Canceled',
      message: 'Your payment has been canceled',
      buttons: ['OK'],
    });

    await alert.present();


    this.router.navigateByUrl('/tabs/tab1');
  }

  async paymentDone(ref: any) {

    const alert = await this.alertController.create({
      header: 'Payment Complete',
      message: 'Your payment has been successful',
      buttons: ['OK'],
    });

    await alert.present();
    
    this.router.navigateByUrl('/tabs/tab1');

  }

  public onSubmit(){
    
  }


}
