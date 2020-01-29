import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuard} from './core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from './_shared/shared.module';
import {AdminAuthGuard} from './core/admin-auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {
    path: 'user', canActivate: [AuthGuard, AdminAuthGuard],
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'portfolio', canActivate: [AuthGuard],
    loadChildren: './portfolio/portfolio.module#PortfolioModule'
  },

  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
