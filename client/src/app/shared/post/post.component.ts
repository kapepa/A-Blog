import { Component, OnInit } from '@angular/core';

interface IPost {
  id: string,
  title: string,
  author: string,
  date: Date
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: IPost[] = [
    { id: 'asd12312', title: 'Text Name One', author: 'anybody people', date: new Date() },
    { id: '34233422', title: 'Text Name Two', author: 'some man', date: new Date() },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
