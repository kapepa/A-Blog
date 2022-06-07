import { Component, OnInit } from '@angular/core';
import { IInput } from "../../dto";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

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

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const values = this.loginForm.value;
    const form = new FormData();
    Object.keys(values).forEach(key => form.append(key, values[key]));
    // this.router.navigate(['/'])
    // this.restForm();
  }

  restForm(){
    this.email?.reset();
    this.password?.reset();
  }

  get email () { return this.loginForm.get('email')}
  get password () { return this.loginForm.get('password')}
  get validForm () { return this.loginForm.valid }

}
