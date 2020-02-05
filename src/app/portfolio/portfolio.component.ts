import {Component, Input, OnInit} from '@angular/core';
import {Equity} from '../_shared/_model/Equity';
import {AuthService} from '../_service/auth.service';
import {SearchService} from './search/search.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  data: Array<string> = ['STOCK1', 'STOCK2', 'STOCK3'];

  @Input() result: Equity;

  constructor(private stockService: SearchService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.init();
  }

}
