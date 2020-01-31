import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {SharedModule} from '../_shared/shared.module';
import {AuthGuard} from '../core';

const USER_ROUTES: Routes = [

  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule,
    SharedModule,
    RouterModule.forChild(USER_ROUTES),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule {
}
