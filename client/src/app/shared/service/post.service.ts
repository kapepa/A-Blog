import { Injectable } from '@angular/core';
import {HttpService, IQuerySelect} from "./http.service";
import {IPost} from "../../dto";
import {Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private $posts: IPost[] = [] as IPost[];
  posts: Subject<IPost[]> = new Subject<IPost[]>();

  constructor(
    private httpService: HttpService,
  ) {
    this.posts.subscribe( posts => this.$posts = posts);
  }

  createPost(data: FormData) {
    return this.httpService.createPost(data);
  }

  receiveAdminAllPost(query?: IQuerySelect) {
    return this.httpService.receiveAdminAllPost(query).subscribe(posts => {
      this.posts.next(posts);
    })
  }

  deleteAdminAllPost(prop: {id: string, index: number}) {
    return this.httpService.deleteAdminAllPost(prop.id).subscribe(() => {
      this.$posts.splice(prop.index, 1);
      this.posts.next(this.$posts);
    });
  }
}
