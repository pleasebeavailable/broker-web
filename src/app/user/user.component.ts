import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router
  ) {
  }

  ngOnInit() {
    this.authService.init();
  }


}
