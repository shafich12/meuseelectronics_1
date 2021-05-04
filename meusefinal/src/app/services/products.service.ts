import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HTTP } from "@ionic-native/http/ngx";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbWV1c2VlbGVjdHJvbmljcy4wMDB3ZWJob3N0YXBwLmNvbSIsImlhdCI6MTYyMDA3MzUxOCwibmJmIjoxNjIwMDczNTE4LCJleHAiOjE2MjA2NzgzMTgsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.C9ABlmDTKS25YzVAwb4-a4B26VPsnAnTnITDdm6ft38'
  baseURL = "https://meuseelectronics.000webhostapp.com/wp-json/wc/v3/products"


  constructor(private http: HTTP) { }

  public getProducts(){
     
    // const httpOptions = {
    //   method: 'GET',
    //   headers: new HttpHeaders({
    //     Authorization: 'Bearer ' + this.token,
    //   }),
    // };

    return this.http.get(this.baseURL + '?orderby=popularity&order=desc', {}, {Authorization: 'Bearer ' + this.token})


    // return this.http.get(this.baseURL + '?orderby=popularity&order=desc', httpOptions).pipe(
    //   map((data: any) => {
    //     return data
    //   })
    // )
  }

  public getCategories(){

    // const httpOptions = {
    //   method: 'GET',
    //   headers: new HttpHeaders({
    //     Authorization: 'Bearer ' + this.token,
    //   }),
    // };

    return this.http.get(this.baseURL + '/categories', {}, {Authorization: 'Bearer ' + this.token})

    // return this.http.get(this.baseURL + '/categories', httpOptions).pipe(
    //   map((data: any) => {
    //     return data
    //   })
    // )

    

  }

  public getProduct(id){

    // const httpOptions = {
    //   method: 'GET',
    //   headers: new HttpHeaders({
    //     Authorization: 'Bearer ' + this.token,
    //   }),
    // };

    return this.http.get(this.baseURL + '/' +id, {}, {Authorization: 'Bearer ' + this.token});

    // return this.http.get(this.baseURL + '/' +id, httpOptions).pipe(
    //   map((data: any) => {
    //     return data
    //   })
    // )

  }

  public getCategory(id){
    // const httpOptions = {
    //   method: 'GET',
    //   headers: new HttpHeaders({
    //     Authorization: 'Bearer ' + this.token,
    //   }),
    // };

    return this.http.get(this.baseURL + '/categories/' +id, {}, {Authorization: 'Bearer ' + this.token});

    // return this.http.get(this.baseURL + '/categories/' +id, httpOptions).pipe(
    //   map((data: any) => {
    //     return data
    //   })
    // )


  }

  public getCategoryProducts(id){
    // const httpOptions = {
    //   method: 'GET',
    //   headers: new HttpHeaders({
    //     Authorization: 'Bearer ' + this.token,
    //   }),
    // };

    return this.http.get(this.baseURL + '?category=' +id, {}, {Authorization: 'Bearer ' + this.token});

    // return this.http.get(this.baseURL + '?category=' +id, httpOptions).pipe(
    //   map((data: any) => {
    //     return data
    //   })
    // )
  }

  public searchProducts(search){

    return this.http.get(this.baseURL + '?search=' + search , {}, {Authorization: 'Bearer ' + this.token});
  }
}
