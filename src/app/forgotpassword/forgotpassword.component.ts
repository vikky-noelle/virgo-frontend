import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(
    private post: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  token : String;
  login = document.getElementsByClassName('main-login') as HTMLCollectionOf<HTMLElement>;
  reset = document.getElementsByClassName('reset-pass') as HTMLCollectionOf<HTMLElement>;
  emailmessage = document.getElementsByClassName('email-message') as HTMLCollectionOf<HTMLElement>;

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.token = res["token"];
      console.log(this.token);
    });
    if(this.router.url.includes("forgot-password")){
      this.login[0].style.display="block";
      this.reset[0].style.display="none";
    }
    if(this.router.url.includes("reset")){
      this.login[0].style.display="none";
      this.tokencheck(this.token)
    }
  }

  tokencheck(token){
    this.post.tokenVerify(token).subscribe(res => {
      if(res["allow"]){
        this.reset[0].style.display="block";
      }
      else{
        this.reset[0].style.display="none";
        this.emailmessage[0].style.display="block";
        this.emailmessage[0].innerHTML="Not a valid token";
      }
    });
  }
  checkUsername(email){
    if(email.length>0)
    this.post.forgotPassword(email).subscribe(res => {
      console.log(res);
      if(res["allow"]){
        this.login[0].style.display="none";
        this.emailmessage[0].style.display="block";
      }
      else
      alert("email does not exist!");
    });
    else{
      alert("Field is empty!");
    }
  }
  resetpassword(email, email1){
    if(email!=email1)
    alert("both passwords are not the same");
    else{
      this.post.changePassword(this.token, email).subscribe(res=>{
        console.log(res);
        // if(res["allow"])
        // this.router.navigate
      });
    }
  }
}
