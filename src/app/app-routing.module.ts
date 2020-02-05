import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from './_shared/shared.module';

const routes: Routes = [
  {
    path: 'portfolio/equity',
    loadChildren: './portfolio/equity-details/equity.module#EquityDetailsModule'
  },
  {
    path: 'portfolio',
    loadChildren: './portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // {path: '**', component: PageNotFound}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    SharedModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
