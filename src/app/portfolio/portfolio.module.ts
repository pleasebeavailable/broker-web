import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';


const PORTFOLIO_ROUTES: Routes = [

  {
    path: '',
    component: PortfolioComponent
  }
];

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule,
    RouterModule.forChild(PORTFOLIO_ROUTES),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PortfolioModule {
}
