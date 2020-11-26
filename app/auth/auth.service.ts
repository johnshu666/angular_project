import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin = false;

  redirectUrl: string = '';

  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedin = true)
    );
  }

  logout(): void {
    this.isLoggedin = false;
  }
}
