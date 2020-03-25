import { Injectable } from '@angular/core';

// using for sessions, not complete yet
@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }
  private loggedIn;
  private username;
  private email;

  set loginStatus(log) {
    console.log("function invoked");
    this.loggedIn = log;
  }

  getloginStatus() {
    return this.loggedIn;
  }
}
