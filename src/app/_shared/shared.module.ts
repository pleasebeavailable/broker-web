import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert/alert.component';
import {WebLayoutComponent} from '../components/web-layout/web-layout.component';
import {HeaderComponent} from '../components/header/header.component';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {FooterComponent} from '../components/footer/footer.component';
import {AuthService} from '../_service/auth.service';

@NgModule({
  declarations: [AlertComponent, WebLayoutComponent, HeaderComponent, NavbarComponent, SidebarComponent, FooterComponent
  ],
  exports: [
    AlertComponent,
    WebLayoutComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [AuthService]
})
export class SharedModule {
}
