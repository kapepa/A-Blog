import { Component, OnInit } from '@angular/core';
import {IInput} from "../../dto";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss','../input/input.component.scss']
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.minLength(6),
    ]),
  });
  inputs: IInput [] = [
    { type: 'text', name: 'email', label: 'Email', data: this.email },
    { type: 'password', name: 'password', label: 'Password', data: this.password },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log('send')
  }

  get email () { return this.loginForm.get('email')}
  get password () { return this.loginForm.get('password')}
  get validForm () { return this.loginForm.valid }

}
