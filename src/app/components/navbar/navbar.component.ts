import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';
import {Observable} from 'rxjs';
import {User} from '../../_model/User';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../../assets/_styles/dropdown.css']
})
export class NavbarComponent{

  constructor(private authService: AuthService, public userService: UserService, private router: Router) {
  }

  logout() {
    this.authService.logout();
  }
}
