import { Component, OnInit } from '@angular/core';
import {IFormData, IPost} from "../dto";
import {PostService} from "../shared/service/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts: IPost[] = [] as IPost[];

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService.receiveAdminAllPost()
  }

}
