import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(e: Event) {
    e.preventDefault();
    this.authService.logout();
    this.router.navigate(['/admin','login'],)
  }
}
