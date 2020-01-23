import {Injectable} from '@angular/core';
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

  public getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(AppConstants.BACKEND_URL + 'users/' + username, httpOptions);
  }

  public getUserRole(userId: number): Observable<string> {
    const str = 'Authorization' + ':' + this.tokenStorage.getToken();
    httpOptions.headers = httpOptions.headers.append('Authorization', this.tokenStorage.getToken());
    console.log(httpOptions);
    return this.httpClient.get<string>(AppConstants.BACKEND_URL + 'data/getuserrole/' + userId, httpOptions);
  }
}
