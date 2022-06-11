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

  formData: IFormData = {
    title: 'Create new post',
    input: [
      {
        name: 'title',
        type: 'text',
        value: '',
        label: 'Name post',
        validate: ['required', "minLength"],
      },
      {
        name: 'content',
        type: 'content',
        value: '',
        label: 'content',
        validate: ['required'],
      },
    ],
  }

  constructor(
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submitForm(data: FormData) {
    this.postService.createPost(data).subscribe((data) => {
      console.log(data)
      // this.router.navigate(['/admin'])
    })
  }


}
