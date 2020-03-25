import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
// cookie
import { CookieService } from 'ngx-cookie-service';
import { BoardsComponent } from './boards/boards.component';
import { CreateboardComponent } from './createboard/createboard.component';
import { BoardviewComponent } from './boardview/boardview.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginRegisterComponent,
    ForgotpasswordComponent,
    LoginHeaderComponent,
    BoardsComponent,
    CreateboardComponent,
    BoardviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
