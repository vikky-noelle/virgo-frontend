import { BoardviewComponent } from './boardview/boardview.component';
import { CreateboardComponent } from './createboard/createboard.component';
import { BoardsComponent } from './boards/boards.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginRegisterComponent},
  { path: 'register', component: LoginRegisterComponent},
  { path: 'forgot-password', component: ForgotpasswordComponent},
  { path: 'reset/:token', component: ForgotpasswordComponent},
  { path: 'boards', component: BoardsComponent},
  { path: 'createboard/:type', component: CreateboardComponent},
  { path: 'boardview/:name/:type', component: BoardviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
