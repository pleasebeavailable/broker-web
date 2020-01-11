import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AppConstants} from '../_shared/AppConstants';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    return this.http.post(AppConstants.BACKEND_URL + 'api/authenticate', {username, password})
      .pipe(map(user => {
        if (user) {
          this.registerSuccessfulLogin(user);
          if (user instanceof User) {
            this.currentUserSubject.next(user);
          }
        }
      }));
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.currentUserSubject.next(null);
  }

  private registerSuccessfulLogin(user) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, JSON.stringify(user));
  }
}
