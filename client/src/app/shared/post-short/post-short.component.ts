import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../dto";
import {PostService} from "../service/post.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-post-short',
  templateUrl: './post-short.component.html',
  styleUrls: ['./post-short.component.scss']
})
export class PostShortComponent implements OnInit {
  posts: IPost[] = [] as IPost[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.posts.subscribe((posts) => {
      this.posts = posts;
    })
  }

  deletePost(prop: {id: any, index: number}) {
    this.postService.deleteAdminAllPost(prop);
  }
}
