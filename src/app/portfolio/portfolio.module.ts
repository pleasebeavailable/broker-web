import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../_shared/shared.module';
import {AuthGuard} from '../core';
import {AdminAuthGuard} from '../core/admin-auth-guard.service';
import { SearchComponent } from './search/search.component';


const PORTFOLIO_ROUTES: Routes = [

  {
    path: 'portfolio',
    component: PortfolioComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  }
];

@NgModule({
  declarations: [PortfolioComponent, SearchComponent],
  imports: [CommonModule,
    SharedModule,
    RouterModule.forChild(PORTFOLIO_ROUTES),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PortfolioModule {
}
