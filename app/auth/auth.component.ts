import { Errors } from './../model/errors.model';
import { AuthService } from './auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isSubmitting = false;
  authType: String = '';
  title: String = '';
  authForm: FormGroup;
  errors: Errors = { errors: {} };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }, );
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // console.log('测试1号', data);
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'login') ? '登录 ' : '注册';

      if (this.authType === 'register') {
        this.authForm.addControl('name', new FormControl());
      }
    });
  }

  // 提交表单
  onSubmit(): void {
    // console.log('userdata', this.authForm.value.email);
    if (!new RegExp(/^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/)
    .test(this.authForm.value.email)) {
     alert('请输入正确格式的邮箱号');
     return;
    }
    const creditial = this.authForm.value;
    this.isSubmitting = true;
    this.userService.attemptAuth(this.authType, creditial).
      subscribe(
        data => this.router.navigateByUrl('/'),
        err => {
          this.errors = err;
          console.log('occur in authC', err);
          this.isSubmitting = false;
        }
      );
  }
}


