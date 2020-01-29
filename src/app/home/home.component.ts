import {Component, OnInit} from '@angular/core';
import {User} from '../_shared/_model/User';
import {AuthService} from '../_service/auth.service';
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
    if (!this.authService.isLoggedIn()) {
      this.authService.reloadPage();
    }
  }

  gerUserDetails() {

  }

}
