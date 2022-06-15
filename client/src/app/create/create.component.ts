import { Component, OnInit } from '@angular/core';
import {IFormData} from "../dto";
import {PostService} from "../shared/service/post.service";
import {Router} from "@angular/router";
import {AlertService} from "../shared/service/alert.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

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
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
  }

  submitForm(data: FormData) {
    this.postService.createPost(data).subscribe((data) => {
      this.router.navigate(['/admin', 'dashboard'])
      this.alertService.success('You success create post.')
    },() => {
      this.alertService.warning('Something went wrong.')
    })
  }

}
