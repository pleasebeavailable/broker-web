import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  private userId: number;

  constructor(private router: Router, private authService: AuthService, private userService: UserService) {
  }

  canActivate(): Observable<boolean> {
    {
      this.authService.currentUser$.pipe(
        map(
          user => user.id
        )
      ).subscribe(id => this.userId = id);

      return this.userService.getUserRole(this.userId).pipe(
        map(role => {
          if (role.toString() === 'ROLE_ADMIN') {
            return true;
          } else {
            this.router.navigate(['/home']);
          }
            })
      );
    }


  }
}
