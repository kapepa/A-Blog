import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import {IPost} from "../../dto";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Subject<IPost[]> = new Subject<IPost[]>();

  constructor(
    private httpService: HttpService,
  ) { }

  createPost(data: FormData) {
    return this.httpService.createPost(data);
  }

  receiveAdminAllPost() {
    return this.httpService.receiveAdminAllPost().subscribe(posts => {
      this.posts.next(posts);
    })
  }
}
