import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(
    private http:HttpClient
  ) { }

  getDetail(username){
    return this.http.get('http://localhost:3000/getDetails?username='+username);
  }

  // creating personal board
  createPboard(name, username){
    return this.http.get('http://localhost:3000/createPboard?name='+name+'&username='+username);
  }
}
