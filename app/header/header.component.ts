import { User } from './../model/user.model';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUer: User;
  // user$: any;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
     this.userService.currentUser.subscribe(
       (userData) => this.currentUer = userData
     );
    //  this.user$ = this.userService.currentUser;
  }

  logout(): void {
    // fake to logout
    this.userService.purgeAuth1();
  }
}
