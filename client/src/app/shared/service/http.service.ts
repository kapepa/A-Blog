import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {IPost, IUser} from "../../dto";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:5000';

  constructor(
    private http: HttpClient,
  ) { }

  login(data: { email: string, password: string; }) {
    return this.http.post<{ access_token: string }>(`${this.url}/api/auth/login`,data)
  }

  getUser() {
    return this.http.get<IUser>(`${this.url}/api/user/profile`)
  };

  createPost(data: FormData): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.url}/api/post/create`, data)
  }

}

