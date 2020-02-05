import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EquityDetailsComponent} from './equity-details.component';
import {AuthGuard} from '../../core';
import {SharedModule} from '../../_shared/shared.module';


const EQUITY_ROUTES: Routes = [

  {
    path: ':symbol',
    component: EquityDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [EquityDetailsComponent],
  imports: [CommonModule,
    SharedModule,
    RouterModule.forChild(EQUITY_ROUTES),
  ]
})
export class EquityDetailsModule {
}
