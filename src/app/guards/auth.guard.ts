import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import {  firstValueFrom } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router: Router, private http:HttpClient){}
 

  async canActivate(): Promise<boolean>  {
    
    await this.authService.authenticate()
    const isLoggedin:boolean = await firstValueFrom(this.authService.loggedIn)
    console.log(isLoggedin);
    
    if(isLoggedin){
      return true
    }else{
      this.router.navigate(['/auth/login'])
      return false
    }
  
  }
}
