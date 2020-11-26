import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenciated: boolean;
  listConfig = {
    type: 'all',
    filters: {}
  };
  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.isAuthenticated
      .subscribe(
        (authenciated) => this.isAuthenciated = authenciated);
  }

  setListTo(type: string = '', filters: Object = {}): void {
    if ((type === 'female' || type === 'male') && !this.isAuthenciated) {
      this.router.navigateByUrl('/login');
    }
    // tslint:disable-next-line: object-literal-shorthand
    this.listConfig = { type: type, filters: filters};
  }
}
