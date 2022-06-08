import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { CookieService } from "ngx-cookie-service";
import { Observable, tap } from "rxjs";
import {IUser} from "../../dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = 'token';

  constructor(
    private httpService: HttpService,
    private cookieService: CookieService
  ) { }

  setAuthorizationToken(token: string){
    this.cookieService.set(this.token, token);
  }

  getAuthorizationToken() {
    return this.cookieService.get(this.token)
  }

  login(data: { email: string, password: string; }): Observable<{ access_token: string }> {
    return this.httpService.login(data).pipe().pipe(tap(console.log));
  }

  logout() {
    this.cookieService.delete(this.token);
  }

  getUser(): Observable<any> {
    return this.httpService.getUser();
  }

}
