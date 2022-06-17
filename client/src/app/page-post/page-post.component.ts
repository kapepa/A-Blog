import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../shared/service/post.service";
import {Observable, of, switchMap} from "rxjs";
import {IPost} from "../dto";

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {
  post$!: Observable<IPost>

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.post$ = this.postService.getOnePost(params['id'])
    // })
    // or
    this.post$ = this.route.params.pipe(
      switchMap((params) => {
        return this.postService.getOnePost(params['id'])
      })
    )
  }

}
