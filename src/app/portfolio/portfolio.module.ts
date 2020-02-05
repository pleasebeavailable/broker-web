import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../_shared/shared.module';
import {AuthGuard} from '../core';


const PORTFOLIO_ROUTES: Routes = [
  {
    path: ':id',
    component: PortfolioComponent
  },
  {
    path: '',
    component: PortfolioComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule,
    SharedModule,
    RouterModule.forChild(PORTFOLIO_ROUTES),
  ]
})
export class PortfolioModule {
}
