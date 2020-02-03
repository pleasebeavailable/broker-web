import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_service/auth.service';
import {SearchService} from '../portfolio/search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private stockService: SearchService) {
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.authService.toLoginPage();
    }

    console.log(this.stockService.getNews().subscribe(
      result => console.log(result)
    ));
  }
}
