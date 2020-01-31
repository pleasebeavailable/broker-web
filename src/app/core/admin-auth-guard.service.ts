import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {map} from 'rxjs/operators';
import {UserService} from '../user/user.service';
import {Observable, of} from 'rxjs';
import {User} from '../_shared/_model/User';
import {TokenStorage} from './token.storage';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  private user: User;

  constructor(private router: Router, private tokenStorage: TokenStorage, private userService: UserService) {
  }

  canActivate(): Observable<boolean> {
    {
      if (!this.tokenStorage.getToken()) {
        this.router.navigate(['/login']);
      }
      this.user = this.tokenStorage.getUser();
      return this.userService.getUserRole(this.user.id).pipe(
        map(role => {

          if (role.toString() === 'ROLE_ADMIN') {
            return true;
          } else {
            this.router.navigate(['']);
            return false;
          }
        })
      );

    }
  }

}


