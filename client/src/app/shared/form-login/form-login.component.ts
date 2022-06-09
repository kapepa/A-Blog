import { Component, OnInit } from '@angular/core';
import { IInput } from "../../dto";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss','../input/input.component.scss']
})
export class FormLoginComponent implements OnInit {
  flagSubmit: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('myemail@email.com',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('thismypassowrd',[
      Validators.minLength(6),
    ]),
  });

  inputs: IInput [] = [
    { type: 'text', name: 'email', label: 'Email', data: this.email, },
    { type: 'password', name: 'password', label: 'Password', data: this.password },
  ]

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.flagSubmit = !this.flagSubmit;
    this.authService.login(this.loginForm.value).subscribe((token: {access_token: string}) => {
      this.authService.setAuthorizationToken(token.access_token);
      this.restForm();
      this.router.navigate(['/admin','dashboard']);
      this.flagSubmit = !this.flagSubmit;
    },() => {
      this.flagSubmit = !this.flagSubmit;
    })
  }

  restForm(){
    this.email?.reset();
    this.password?.reset();
  }

  get email () { return this.loginForm.get('email')}
  get password () { return this.loginForm.get('password')}
  get validForm () { return this.loginForm.valid }
  get authError () { return this.authService.error }

}
