import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {TokenStorage} from './token.storage';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorage
  ) {
  }

  canActivate(route, state: RouterStateSnapshot) {

    if (this.tokenStorage.getToken()) {
      return this.authService.currentUser$.pipe(
        map(user => {
            if (user) {
              return true;
            } else {
              this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
              return false;
            }
          }
        )
      );
    }
  }
}
