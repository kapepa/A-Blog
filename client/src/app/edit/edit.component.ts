import { Component, OnInit } from '@angular/core';
import { PostService } from "../shared/service/post.service";
import { ActivatedRoute } from "@angular/router";
import {IFormData, IPost} from "../dto";
import {timeout} from "rxjs";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formData: IFormData = {} as IFormData;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postService.receiveOnePost(params['id']);
      this.postService.post.subscribe((post: IPost) => {
        this.formData = {
          title: 'Edit post',
          input: [
            {
              name: 'title',
              type: 'text',
              value: post.title,
              label: 'Name post',
              validate: ['required', "minLength"],
            },
            {
              name: 'content',
              type: 'content',
              value: post.content,
              label: 'content',
              validate: ['required'],
            },
          ],
        }
      })
    })
  }

  get post () {
    return this.postService.post;
  }

  submitForm(data: FormData) {

  }

}
