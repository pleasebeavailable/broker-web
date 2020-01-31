import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../_shared/_model/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../_shared/AppConstants';
import {AuthService} from '../_service/auth.service';
import {TokenStorage} from '../core/token.storage';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private httpClient: HttpClient, private authService: AuthService, private tokenStorage: TokenStorage) {
    this.authService.currentUser$.subscribe(user => this.user = user);
  }

  public getUserRole(userId: number): Observable<string> {
    httpOptions.headers = httpOptions.headers.append('Authorization', this.tokenStorage.getToken());
    return this.httpClient.get<string>(AppConstants.BACKEND_URL + 'data/getuserrole/' + userId, httpOptions);
  }

}
