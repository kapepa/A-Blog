import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../shared/service/auth.service";

@Injectable()
export class AccessAdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    if (this.authService.isLogin){
      return true;
    }
    this.authService.logout();
    this.router.navigate(['/admin','login']);
    return false;
  }

}
