import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../_model/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../_shared/AppConstants';
import {AuthService} from '../_service/auth.service';

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

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.authService.currentUser$.subscribe(user => this.user = user);
  }

  public getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(AppConstants.BACKEND_URL + 'users/' + username, httpOptions);
  }
}
