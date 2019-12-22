import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from './register.service';
import {first} from 'rxjs/operators';
import {AlertService} from '../_service/alert.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../model/User';
import {AppMethods} from '../_shared/AppMethods';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private alertService: AlertService, private router: Router, private location: Location) {
  }

  get f() {
    return this.registerForm.controls;
  }

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  user: User;


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['',
        [
          Validators.required,
          AppMethods.matchValues('password')
        ]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerService.register(this.registerForm.value)
        .pipe()
        .subscribe(
          data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
    } else {
      alert('Register form not valid!');
    }
  }

  createUser(): User {
    const form = this.registerForm.value;
    this.user = new User();
    this.user.username = form.username;
    this.user.firstName = form.firstName;
    this.user.lastName = form.lastName;
    this.user.email = form.email;
    this.user.password = form.password;

    return this.user;
  }

  goBack() {
    this.location.back();
  }
}
