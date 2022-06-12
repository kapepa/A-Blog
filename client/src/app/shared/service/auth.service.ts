import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { CookieService } from "ngx-cookie-service";
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  name: string = 'token';
  error: Subject<string> = new Subject<string>();
  token: Subject<boolean> = new Subject<boolean>();

  constructor(
    private httpService: HttpService,
    private cookieService: CookieService
  ) {
    this.token.subscribe( bol => this.isLogin = bol)
  }

  private handleError(error: HttpErrorResponse) {
    const {statusCode, message} = error.error;

    switch (statusCode) {
      case 401: this.error.next(message);
        break;
      case 500: this.error.next(message);
        break;
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  setAuthorizationToken(token: string){
    this.token.next(true);
    this.cookieService.set(this.name, token);
  }

  getAuthorizationToken() {
    return this.cookieService.get(this.name)
  }

  login(data: { email: string, password: string; }): Observable<{ access_token: string }> {
    return this.httpService.login(data).pipe().pipe(
      // tap(console.log),
      catchError(this.handleError.bind(this))
    );
  }

  logout() {
    this.token.next(false);
    this.cookieService.delete(this.name);
  }

  getUser(): Observable<any> {
    return this.httpService.getUser();
  }

}
