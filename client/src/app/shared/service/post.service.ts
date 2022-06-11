import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpService: HttpService,
  ) { }

  createPost(data: FormData) {
    return this.httpService.createPost(data);
  }
}
