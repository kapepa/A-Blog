import { Component, OnInit } from '@angular/core';
import { PostService } from "../shared/service/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IFormData, IPost} from "../dto";
import {AlertService} from "../shared/service/alert.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formData: IFormData = {} as IFormData;
  postID: string = '';

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postID = params['id'];
      this.postService.receiveOnePost(this.postID);
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

  submitForm(form: FormData) {
    this.postService.updatePost(form, this.postID).subscribe(() => {
      this.router.navigate(['/admin','dashboard']);
      this.alertService.success('You success update own post')
    },() => {
      this.alertService.wrong('You are not the author of the post')
    });
  }

}
