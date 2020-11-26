import { InfosService } from './../infos.service';
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class InfoResolver implements Resolve<any> {
  constructor(
    private infosService: InfosService,
    private router: Router,
    // private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.infosService.get(route.params['slug'])
      .pipe(catchError(err => this.router.navigateByUrl('/')));
    // return this.articlesService.get(route.params['slug'])
    //   .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
