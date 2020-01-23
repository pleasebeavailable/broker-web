import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../_service/alert.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../_shared/_model/User';
import {AppMethods} from '../_shared/AppMethods';
import {AuthService} from '../_service/auth.service';
import {SelectOption} from '../_shared/_model/select-option.model';
import {Role} from '../_shared/_model/Role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles: Array<SelectOption>;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private alertService: AlertService, private router: Router, private location: Location) {
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
    this.roles = [];
    Object.keys(Role).forEach(role => {
      this.roles.push(new SelectOption(Role[role], role));
    });

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
        ]],
      role: ''
    });

  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value)
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

  goBack() {
    this.location.back();
  }

  refreshRoleValue(value: any) {
    this.registerForm.controls.role.patchValue(value.value);
  }

  onRoleClear() {
    this.registerForm.controls.role.patchValue('');
  }
}
