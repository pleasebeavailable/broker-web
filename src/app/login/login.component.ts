import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorage} from '../core/token.storage';
import {AuthService} from '../_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  isLoggedIn = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public tokenStorage: TokenStorage,
  ) {
  }

  ngOnInit() {

    if (this.tokenStorage.getToken() === null) {
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
      } else {
        this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
        });
      }
    }

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        user => {
          this.tokenStorage.saveToken(user.jwttoken);
          this.tokenStorage.saveUser(user);
          this.isLoggedIn = true;
          this.reloadPage();
        },
        err => {

        }
      );
  }

  private reloadPage() {
    this.router.navigate(['']);
  }
}
