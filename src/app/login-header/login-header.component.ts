import { CookieService } from 'ngx-cookie-service';
import { GetService } from './../shared/get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {

  constructor(
    private get: GetService,
    private cookie: CookieService
  ) { }
  boardlist=[];
  toggleboard = false;
  togglecreate = false;
  board = document.getElementsByClassName('form-board') as HTMLCollectionOf<HTMLElement>; 
  cboard = document.getElementsByClassName('form-create') as HTMLCollectionOf<HTMLElement>; 
  ngOnInit(): void {
    this.getDetails();
  }
  // getting boards
  getDetails(){
    console.log("get details");
    if(this.cookie.check("username")){
      var user = this.cookie.get("username");
      this.get.getDetail(user).subscribe(res=>{
        console.log(res[0]["boardname"][0]);
        for(var i in res[0]["boardname"])
        console.log(res[0]["boardname"][i]);
      });
    
    }
  }
  logoutfun(){
    this.cookie.set("loggedIn", 'false');
    window.location.reload();
  }
  toggleB(){
    this.toggleboard=!this.toggleboard;
    if(this.toggleboard)
    this.board[0].style.display="block";
    else
    this.board[0].style.display="none";
  }
  toggleC(){
    this.togglecreate=!this.togglecreate;
    if(this.togglecreate)
    this.cboard[0].style.display="block";
    else
    this.cboard[0].style.display="none";
  }
}
