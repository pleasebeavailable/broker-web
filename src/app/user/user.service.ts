import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../_shared/AppConstants';

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


  constructor(private httpClient: HttpClient) {
  }

  public getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(AppConstants.BACKEND_URL + 'users/' + username, httpOptions);
  }
}
