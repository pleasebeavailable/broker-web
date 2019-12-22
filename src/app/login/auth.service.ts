import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppConstants} from '../_shared/AppConstants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<any>;
  private USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  private username: string;
  private password: string;

  constructor(private http: HttpClient) {
  }

  login(username, password) {
    return this.http.post(AppConstants.BACKEND_URL + 'users/authenticate', {username, password})
      .pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }


  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return false;
    }
    return true;
  }

  private registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }
}
