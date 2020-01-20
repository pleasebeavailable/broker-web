import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../_shared/AppConstants';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_model/User';
import {Role} from '../_model/Role';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
  })
};

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

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(AppConstants.BACKEND_URL + 'api/authenticate', {username, password}, httpOptions);
  }

  register(data): Observable<any> {
    return this.http.post(AppConstants.BACKEND_URL + 'api/register', {
      username: data.username,
      email: data.email,
      roles: data.role,
      password: data.password
    }, httpOptions);
  }
}
