import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../_shared/AppConstants';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_shared/_model/User';
import {TokenStorage} from '../core/token.storage';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser$: Observable<User>;

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) {
    this.currentUserSubject = new BehaviorSubject<User>(tokenStorage.getUser());
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(AppConstants.BACKEND_URL + 'api/authenticate', {username, password}, httpOptions);
  }

  register(data): Observable<any> {
    return this.http.post(AppConstants.BACKEND_URL + 'api/register', {
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
      password: data.password
    }, httpOptions);
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }


}
