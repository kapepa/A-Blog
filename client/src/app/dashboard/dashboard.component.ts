import { Component, OnInit } from '@angular/core';
import { IFormData } from "../dto";

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
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }



}
