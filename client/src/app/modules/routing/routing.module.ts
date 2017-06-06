import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { BoardComponent } from '../board/board.component';
//  import { LoginGuardService } from '../user/services/auth/login-guard.service';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'board', component: LoginComponent},/*,
    { path: '', loadChildren:'../object/object.module#ObjectModule'}*/
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
