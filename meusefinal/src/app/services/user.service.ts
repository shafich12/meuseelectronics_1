import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public loginUser(username, password) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const userData = `username=${username}&password=${password}`;
    const url = 'https://meuseelectronics.000webhostapp.com';

    return new Promise((resolve, reject) => {
      this.http
        .post(`${url}/wp-json/jwt-auth/v1/token`, userData, { headers })
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            resolve(err);
          }
        );
    });
  }

  public createUser(email, username, password) {
    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const url = 'https://meuseelectronics.000webhostapp.com';
    const consumerKey = 'ck_f5146797fde36d0751ed059d18296f3a57781fe2';
    const consumerSecret = 'cs_bda7daf63413b39bf1bc0b19afd5d98e629b22a6';
    const data = `username=${username}&email=${email}&password=${password}`;
    return new Promise(resolve => {
      this.http
        .post(
          `${url}/wp-json/wc/v3/customers?consumer_key=${consumerKey
          }&consumer_secret=${consumerSecret}`,
          data,
          { headers: header }
        )
        .subscribe(customerData => {
          resolve(customerData);
        });
    });
  }

  


}
