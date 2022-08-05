import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom,  Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedInSubject = new BehaviorSubject(false)
  baseURL = "https://gg-store.herokuapp.com"

  constructor(private http:HttpClient) { }

  login(username:string, password:string, rememeber:boolean = false){
    return this.http.post(this.baseURL+"/users/login",{username:username,password:password, rememeber})
  }

  register(firstname:string, lastname:string,username:string,email:string, password:string ){
    return this.http.post(this.baseURL+"/users/create",{firstname,lastname,username,email,password,role:0})
  }
  update( user: User){
    const user_id = JSON.parse(localStorage.getItem("user_info")!).id
    return this.http.patch(this.baseURL+`/users/${user_id}`,{...user})
  }
  get currentUser(){
    const user_id = JSON.parse(localStorage.getItem("user_info")!).id
    return this.http.get(this.baseURL+`/users/${user_id}`)
  }
  setLoggedIn(state:boolean){
    this.isLoggedInSubject.next(state)
  }
  async authenticate(){
    try{
      const res = await firstValueFrom(this.currentUser)
      this.setLoggedIn(true)
      return true

    }catch(error){
      localStorage.removeItem('token')
      localStorage.removeItem('user_info')
      this.setLoggedIn(false)
      return false
    }
  }
  get loggedIn():Observable<boolean>{
    return this.isLoggedInSubject
  }
  get token(){
    return localStorage.getItem("token")
  }

}
