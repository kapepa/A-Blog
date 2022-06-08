import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {IUser} from "../../dto";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  login(data: { email: string, password: string; }) {
    return this.http.post<{ access_token: string }>(`${this.url}/api/auth/login`,data)
  }

  getUser() {
    return this.http.get<any>(`${this.url}/api/user/profile`)
  }

}

