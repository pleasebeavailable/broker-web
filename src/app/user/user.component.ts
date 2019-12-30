import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private username: string = sessionStorage.getItem('authenticatedUser');
  private user: User;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser(this.username).subscribe( user => this.user = user);
  }

}
