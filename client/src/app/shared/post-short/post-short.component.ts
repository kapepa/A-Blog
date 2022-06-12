import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../dto";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-post-short',
  templateUrl: './post-short.component.html',
  styleUrls: ['./post-short.component.scss']
})
export class PostShortComponent implements OnInit {
  // @Input() posts!: IPost[]

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    console.log(this.posts)
  }

  get posts(){ return this.postService.posts }
}
