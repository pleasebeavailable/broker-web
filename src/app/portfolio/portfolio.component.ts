import {Component, Input, OnInit} from '@angular/core';
import {StockService} from '../_service/stock.service';
import {Equity} from '../_shared/_model/Equity';
import {AuthService} from '../_service/auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  data: Array<string> = ['STOCK1', 'STOCK2', 'STOCK3'];

  @Input() result: Equity;

  constructor(private stockService: StockService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.init();
  }

}
