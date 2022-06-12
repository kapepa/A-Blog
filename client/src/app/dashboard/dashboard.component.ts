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

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService.receiveAdminAllPost(0)
  }

  get posts() { return this.postService.posts };

}
