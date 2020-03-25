import { GetService } from './../shared/get.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  constructor(
    private cookie: CookieService,
    private get: GetService
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }
  // getting board details
  getDetails(){
    console.log("get details");
    if(this.cookie.check("username")){
      var user = this.cookie.get("username");
      this.get.getDetail(user).subscribe(res=>{
        console.log(res);
      });
    
    }
  }
}
