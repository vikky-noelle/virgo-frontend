import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  loggedOut=true;
  loggedIn=false;
  constructor(
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    if(!this.cookie.check("loggedIn")){
      console.log("creating cookie");
      this.cookie.set("loggedIn", 'false');
    }
    else{
        const stat = JSON.parse(this.cookie.get("loggedIn"));
        if(stat){
          this.loggedOut=false;
          this.loggedIn=true;
        }
        else{
          this.loggedOut=true;
          this.loggedIn=false;
        }
    }
  }

}
