import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active = true;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
