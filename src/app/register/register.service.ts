import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/User';
import {Observable} from 'rxjs';
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
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  public register(user: User): Observable<{}> {
    console.log(user);
    return this.httpClient.post(AppConstants.BACKEND_URL + 'users/register', user, httpOptions); //`${config.appUrl}
  }
}
