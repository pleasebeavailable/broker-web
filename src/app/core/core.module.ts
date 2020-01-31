import { NgModule } from '@angular/core';
import {AuthGuard} from './auth.guard';
import {TokenStorage} from './token.storage';
import {AdminAuthGuard} from './admin-auth-guard.service';



@NgModule({
  declarations: [],
  providers: [AuthGuard, TokenStorage, AdminAuthGuard],
  imports: [
  ]
})
export class CoreModule { }
