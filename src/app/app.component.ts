import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './_model/User';
import {TokenStorage} from './core/token.storage';
import {AuthService} from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  private currentUser: User;
  private roles: string[] = [];
  showUserLayout = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorage
  ) {

  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    this.authService.currentUser$.subscribe(user => this.currentUser = user);
    console.log(this.currentUser);
  }
}

