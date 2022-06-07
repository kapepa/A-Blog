import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';

  constructor(
    private httpService: HttpService,
    private cookieService: CookieService
  ) { }

  setToken(token: string){
    this.cookieService.set('token', token);
  }

  login(data: { email: string, password: string; }) {
    this.httpService.login(data).subscribe((token) => this.setToken(token.access_token));
  }

  logout() {

  }

}
