import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './core';
import {User} from './_model/User';
import {TokenStorage} from './login/token.storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  private currentUser: User;
  private roles: string[];
  showUserLayout = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorage
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;

      this.showUserLayout = this.roles.includes('ROLE_USER');
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
