import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
