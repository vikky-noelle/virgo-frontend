import { PostService } from './../shared/post.service';
import { CookieService } from 'ngx-cookie-service';
import { GetService } from './../shared/get.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createboard',
  templateUrl: './createboard.component.html',
  styleUrls: ['./createboard.component.css']
})
export class CreateboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private get: GetService,
    private post: PostService,
    private router: Router,
    private cookie: CookieService
  ) { }
  pboard = document.getElementsByClassName('p-form') as HTMLCollectionOf<HTMLElement>;
  tboard = document.getElementsByClassName('t-form') as HTMLCollectionOf<HTMLElement>;
  
  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      if(res.type=="pboard"){
        console.log("personal board");
        this.pboard[0].style.display="block";
        this.tboard[0].style.display="none"
      }
      else if(res.type=="tboard"){
        this.pboard[0].style.display="none";
        this.tboard[0].style.display="block";
      }
    });
  }
  pcreate(name){
    var username = this.cookie.get("username");
    if(name.length>0){
      console.log("creating..."+name);
      this.get.createPboard(name, username).subscribe(res=>{
        if(res["success"]){
          console.log("yay");
          this.router.navigate(['/boardView', {name:name, type: "personal"}])
        }
      });
    }
    else
    alert("Field is empty!");
  }
  tcreate(name, des){
    var username = this.cookie.get("username");
    if(name.length>0){
      console.log("creating..."+name+"\n"+des);
      this.post.createTboard(name, des, username).subscribe(res=>{
        if(res["success"]){
          console.log("yay");
          this.router.navigate(['/boardView', {name:name, type: "team"}])
        }
      });
    }
    else
    alert("Field is empty!");
  }

}
