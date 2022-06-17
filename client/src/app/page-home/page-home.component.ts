import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IPost } from "../dto";
import {PostService} from "../shared/service/post.service";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  posts$!: Observable<IPost[]>;
  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postService.receiveAllPost();
  }

}
