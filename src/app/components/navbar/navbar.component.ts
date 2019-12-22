import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AppComponent]
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private appComp: AppComponent) {
  }

  ngOnInit() {
  }

  getTitle() {
    return 'title';
  }

  sidebarToggle() {
    return null;
  }

  logout() {
    this.appComp.logout();
  }


}
