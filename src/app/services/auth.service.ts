import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedInSubject = new BehaviorSubject(false)

  constructor(private http:HttpClient) { }

  login(username:string, password:string){
    return this.http.post("https://gg-store.herokuapp.com/users/login",{username:username,password:password})
  }

  register(firstname:string, lastname:string,username:string,email:string, password:string ){
    return this.http.post("https://gg-store.herokuapp.com/users/create",{firstname,lastname,username,email,password,role:0})
  }
  setLoggedIn(state:boolean){
    this.isLoggedInSubject.next(state)
  }
  get loggedIn():Observable<boolean>{
    return this.isLoggedInSubject
  }
  get token(){
    return localStorage.getItem("token")
  }

}
