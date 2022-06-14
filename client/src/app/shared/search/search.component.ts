import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../service/post.service";
import { interval, timeout, timer } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private timeout: any;
  slow$: any;
  inputSearch: string = ''

  constructor(
    private postService: PostService,
  ) {}

  ngOnInit(): void {
  }

  searchInput() {
    if(this.slow$) this.slow$.unsubscribe();
    this.slow$ = timer(2000).pipe().subscribe({
      next: () => {
        this.postService.receiveAdminAllPost({ where: 'title', where_val: this.inputSearch })
        this.slow$.unsubscribe()
      },
      error: console.error,
    });
  }


  // searchInput(e: Event) {
  //   const target = e.target as HTMLInputElement;
  //
  //   if(this.slow$) this.slow$.unsubscribe();
  //   this.slow$ = timer(2000).pipe().subscribe({
  //       next: () => {
  //         this.postService.receiveAdminAllPost({ where: 'title', where_val: target.value })
  //         this.slow$.unsubscribe()
  //       },
  //       error: console.error,
  //     });
  // }

}
