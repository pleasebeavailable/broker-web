import { NgModule } from '@angular/core';
import {AuthGuard} from './auth.guard';
import {TokenStorage} from './token.storage';



@NgModule({
  declarations: [],
  providers: [AuthGuard, TokenStorage],
  imports: [
  ]
})
export class CoreModule { }
