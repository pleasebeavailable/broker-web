import {Component, Input, OnInit} from '@angular/core';
import {AdminAuthGuard} from '../core/admin-auth-guard.service';
import {AuthService} from '../_service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private adminAuthGuard: AdminAuthGuard, public authService: AuthService, private router: Router
  ) {
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.authService.reloadPage();
    }
  }


}
