import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuard} from './core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from './_shared/shared.module';
import {WebLayoutComponent} from './components/web-layout/web-layout.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'portfolio',
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
