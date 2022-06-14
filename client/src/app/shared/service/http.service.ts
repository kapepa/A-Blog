import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import {IPost, IUser} from "../../dto";

export interface IQuerySelect {
  where?: string,
  where_val?: string | number | boolean,
  order?: string,
  order_val?: '' | "ASC" | "DESC",
  skip?: number,
  take?: number,
}

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

  receiveAdminAllPost(query?: IQuerySelect ): Observable<IPost[]> {
    const param = new URLSearchParams();
    if(query){
      const keyObj = Object.keys(query);
      if(query && !!Object.keys(keyObj).length){
        keyObj.forEach( (key) => {param.append(key, query[key as keyof IQuerySelect] as string)})
      }
    }

    const queryString = param.toString();
    return this.http.get<IPost[]>(`${this.url}/api/post/admin/all${!!queryString ? '?'+queryString : ''}`);
  }

  deleteAdminAllPost(id: string): Observable<any>{
    return this.http.delete(`${this.url}/api/post/admin?id=${id}`);
  }

  receiveOnePost(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${this.url}/api/post/one?id=${id}`);
  }
}

