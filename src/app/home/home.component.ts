import { Component, OnInit } from '@angular/core';
import {User} from '../_model/User';
import {AuthService} from '../login/auth.service';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private user: User;

  constructor(private authService: AuthService, private  userService: UserService) {
  }

  ngOnInit() {
  }

  gerUserDetails() {

  }

}
