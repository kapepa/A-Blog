import { Injectable } from '@angular/core';
import { HttpService, IQuerySelect } from "./http.service";
import { IPost } from "../../dto";
import {map, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private $posts: IPost[] = [] as IPost[];
  private $post: IPost = {} as IPost;
  posts: Subject<IPost[]> = new Subject<IPost[]>();
  post: Subject<IPost> = new Subject<IPost>();

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

  receiveOnePost(id: string) {
    return this.httpService.receiveOnePost(id).pipe(map((post) => post)).subscribe((post: IPost) => {
      this.$post = post;
      this.post.next(post);
    })
  }

  updatePost(form: FormData, id: string){
    return this.httpService.updatePost(form, id).pipe(tap(console.log));
  }
}
