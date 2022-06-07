import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

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

  login(data: { email: string, password: string; }): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(`${this.url}/api/auth/login`,data).pipe(catchError(this.handleError))
  }

}

