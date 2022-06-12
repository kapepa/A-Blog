import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import {IPost} from "../../dto";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts!: IPost[];

  constructor(
    private httpService: HttpService,
  ) { }

  createPost(data: FormData) {
    return this.httpService.createPost(data);
  }

  receiveAdminAllPost(skip: number) {
    return this.httpService.receiveAdminAllPost().subscribe(posts => {
      console.log(posts)
      this.posts = posts;
    })
  }
}
