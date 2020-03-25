import { PostService } from './../shared/post.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boardview',
  templateUrl: './boardview.component.html',
  styleUrls: ['./boardview.component.css']
})
export class BoardviewComponent implements OnInit {
  name = "name";
  type = "personal";
  showadd = document.getElementsByClassName('show-add') as HTMLCollectionOf<HTMLElement>;
  hideheading = document.getElementsByClassName('add-heading') as HTMLCollectionOf<HTMLElement>;
  toggleshow=false;
  boardname;
  boardtype;
  username;

  @ViewChild("divContent", {read: ElementRef}) private divContent: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private cookie: CookieService,
    private post: PostService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.username=this.cookie.get("username");
    this.route.params.subscribe(res=>{
      this.boardname=res.name;
      this.boardtype=res.type;
      console.log(res.name+" - "+res.type);
    });
  }
  toggleS(){
    this.toggleshow=!this.toggleshow;
    if(this.toggleshow){
      this.showadd[0].style.display="block";
      this.hideheading[0].style.display="none";
    }
    else{
      this.showadd[0].style.display="none";
      this.hideheading[0].style.display="block";
    }
  }
  // addlistdom(name){
  //   let div = this.renderer.createElement('div');
  //   this.renderer.setAttribute(div, 'class', 'lists');
  //   let div1 = this.renderer.createElement('div');
  //   this.renderer.setAttribute(div1, 'class', 'lists-header');
  //   let h1 = this.renderer.createElement('h1');
  //   let text =this.renderer.createText(name);
  //   this.renderer.appendChild(h1,text);
  //   let b = this.renderer.createElement('b');
  //   text = this.renderer.createText("Delete");
  //   this.renderer.appendChild(b,text);
  //   this.renderer.appendChild(h1,b);
  //   this.renderer.appendChild(div1,h1);
  //   let input = this.renderer.createElement('input');
  //   this.renderer.setAttribute(input, 'type', 'text');
  //   this.renderer.setAttribute(input, 'placeholder', 'enter the card content');
  //   this.renderer.appendChild(div, div1);
  //   this.renderer.appendChild(div, input);
  //   let button = this.renderer.createElement('button');
  //   this.renderer.setAttribute(button, '[innerHTML]','addlist(cardcontent.value)');
  //   text = this.renderer.createText("Add Card");
  //   this.renderer.appendChild(button, text);
  //   this.renderer.appendChild(div,button);
  //   // this.renderer.appendChild(this.divContent.nativeElement,div);
    
  //   console.log(div);
  //   // var appendelement = '<div class="lists"><div class="lists-header"><h1>'+name+
  //   //                       '<b>Delete</b></h1></div><input type="text" placeholder="enter the card content" #cardcontent>'+
  //   //                       '<button (click)="addlist(cardcontent.value)">Add Card</button></div>';
  //   // console.log(appendelement);
  // }
  addlist(name){
    // this.addlistdom(name);
    console.log(name);
    if(name.length>0){
      this.post.addList(name, this.username, this.type, this.boardname).subscribe(res=>{
        console.log(res);
        // this.addlistdom(name);
      });
    }
    else
    alert("field empty");
    this.toggleS();
  }
  addCard(name){
    console.log(name);
  }
}
