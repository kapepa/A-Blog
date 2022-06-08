import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get isLogin() { return this.authService.isLogin }

}
