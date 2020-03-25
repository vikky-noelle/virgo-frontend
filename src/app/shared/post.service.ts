import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  passwordObj = {
    password: String,
    token: String
  }
  tokenObj = {
    token: String
  }
  loginObj = {
    username: String,
    password: String
  }
  verifyObj = {
    username: String,
    email: String
  }
  forgotObj = {
    email: String
  }
  registerObj = {
    username: String,
    email: String,
    password: String
  }
  teamObj = {
    name: String,
    username: String,
    des: String
  }
  addlistObj = {
    listname: String,
    username: String,
    type: String,
    boardname: String
  }

  constructor(
    private http: HttpClient,
  ) { }

  LoginCheck(username, password){
    console.log("login-check working");
    this.loginObj = {
      username: username,
      password: password
    }
    return this.http.post('http://localhost:3000/login-check',this.loginObj);
  }
  Register(username, email, password){
    console.log("register working");
    this.registerObj = {
      username: username,
      email: email,
      password: password
    }
    return this.http.post('http://localhost:3000/register',this.registerObj);
  }
  forgotPassword(email){
    this.forgotObj = {
      email: email,
    }
    return this.http.post('http://localhost:3000/forgot-password',this.forgotObj);
  }
  tokenVerify(token){
    this.tokenObj = {
      token: token
    }
    return this.http.post('http://localhost:3000/verifyToken', this.tokenObj);
  }
  changePassword(token, password){
    this.passwordObj = {
      password: password,
      token: token
    }
    return this.http.post('http://localhost:3000/changePassword', this.passwordObj);
  }
  uniqueVerify(username, email){
    this.verifyObj = {
      username: username,
      email: email
    }
    return this.http.post('http://localhost:3000/uniqueVerify', this.verifyObj);
  }
  createTboard(name,des,username){
    this.teamObj = {
      name: name,
      des: des,
      username: username,
    }
    return this.http.post('http://localhost:3000/createTboard', this.teamObj);
  }

  addList(listname, username, type, boardname){
    this.addlistObj = {
      listname:listname,
      username:username,
      type:type,
      boardname:boardname
    }
    return this.http.post('http://localhost:3000/addList', this.addlistObj);
  }
}
