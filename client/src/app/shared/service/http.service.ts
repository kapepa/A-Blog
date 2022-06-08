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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  login(data: { email: string, password: string; }) {
    return this.http.post<{ access_token: string }>(`${this.url}/api/auth/login`,data).pipe(catchError(this.handleError));
  }

  getUser() {
    return this.http.get<any>(`${this.url}/api/user/profile`).pipe(catchError(this.handleError));
  }

}

