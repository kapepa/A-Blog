import { Component, OnInit } from '@angular/core';
import {IInput} from "../../dto";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  inputs: IInput [] = [
    { type: 'text', name: 'email', label: 'Email' },
    { type: 'password', name: 'password', label: 'Password' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(e: Event) {
    e.preventDefault();
  }
}
