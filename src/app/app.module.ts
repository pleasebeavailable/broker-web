import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from './_shared/shared.module';
import {CommonModule} from '@angular/common';
import {UserModule} from './user/user.module';
import {PortfolioModule} from './portfolio/portfolio.module';
import {TokenStorage} from './login/token.storage';
import {SelectModule} from 'ng-select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    PortfolioModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    SelectModule
  ],
  providers: [TokenStorage],
  bootstrap: [AppComponent]
})
export class AppModule {
}
