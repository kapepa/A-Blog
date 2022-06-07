import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';

  constructor(
    private httpService: HttpService,
  ) { }

  setToken(){

  }

  login(){

  }

  logout() {

  }

}
