import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router:
    Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      // console.log('测试2号', state.url);
      // const url: string = state.url;
      return this.checkLogin();
    }

    checkLogin(): boolean | UrlTree {
      if (this.authService.isLoggedin) { return true; }

      return this.router.parseUrl('/login');
  }

}
