import {Component, Input, OnInit} from '@angular/core';
import {AdminAuthGuard} from '../core/admin-auth-guard.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private adminAuthGuard: AdminAuthGuard) {
  }

  ngOnInit() {
    console.log(this.adminAuthGuard.canActivate());
  }

}
