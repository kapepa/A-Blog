import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private timeout: any;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
  }

  searchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.postService.receiveAdminAllPost({ where: 'title', where_val: target.value }).add(() => {
        clearTimeout(this.timeout);
      })
    },2000)
  }
}
