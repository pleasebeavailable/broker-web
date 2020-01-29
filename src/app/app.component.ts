import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './_shared/_model/User';
import {TokenStorage} from './core/token.storage';
import {AuthService} from './_service/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  private currentUser: User;
  private roles: string[] = [];
  private apiUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=22MBOE0URZQQMFWA';
  stocks: any = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorage,
  ) {
  }

  ngOnInit() {

    this.authService.currentUser$.subscribe(user => this.currentUser = user);
  }
}

