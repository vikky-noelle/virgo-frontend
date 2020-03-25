import { CookieService } from 'ngx-cookie-service';
import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../shared/interaction.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  
  constructor(
    private router: Router,
    private post: PostService,
    private event: InteractionService,
    private cookie: CookieService
  ) { }

  login = document.getElementsByClassName('login-window') as HTMLCollectionOf<HTMLElement>;
  register = document.getElementsByClassName('register-window') as HTMLCollectionOf<HTMLElement>;
  regi = document.getElementsByClassName('regi') as HTMLCollectionOf<HTMLElement>;

  ngOnInit(): void {
    if(this.router.url.includes('login')){
      this.login[0].style.display="block";
    }
    else if(this.router.url.includes('register')){
      this.register[0].style.display="block";
    }
  }

  login_send(username, password){
    if(username.length>0&&password.length>0)
    this.post.LoginCheck(username, password).subscribe( res=> {
      if(res["allow"]){
        this.cookie.set("username", username);
        this.cookie.set("loggedIn", 'true');
        // this.event.loginStatus = res["allow"];
        this.router.navigate(['/']);
      }
      else{
        alert("Incorrect username or password.\nTry again.")
      }
    });
    else
    alert("Required Fields are empty!");
  }

  register_send(username, email, password){
    console.log("worked");
    if(username.length>0&&password.length>0&&email.length>0)
    this.post.Register(username, email, password).subscribe( res=> {
      if(res["allow"]){
        this.cookie.set("username", username);
        this.cookie.set("loggedIn", 'true');
        // this.event.loginStatus = res["allow"];
        this.router.navigate(['/']);
      }
      else{
        alert("There was some problem in registering.")
      }
    });
    else
    alert("Required Fields are empty!");
  }

  usernameUnique(username){
    const email=null
    console.log(username);
    this.post.uniqueVerify(username, email).subscribe(res=>{
      if(res["allow"]){
      alert("username is already taken, use a new one.")
    }
    });  
  }
  emailUnique(email){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const username = null;
    console.log(email);  
    if(emailPattern.test(email))
    this.post.uniqueVerify(username, email).subscribe(res=>{
      if(res["allow"])
      alert("email is already taken, use a new one.")
    });
    else
    alert("Not a valid email format\nEnter a valid email id.");
  }
  passwordValidity(password){
    const ch = /\d+/;
    const ch1 = /[a-zA-Z]/;
    if(!(ch.test(password)&&ch1.test(password)))
    alert("Password doesn't contain either a number or an alphabet\nIt should contain both");
    console.log(password);
  }
}
