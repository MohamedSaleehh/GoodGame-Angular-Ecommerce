import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router: Router){}


  async canActivate(): Promise<boolean>  {

    const isLoggedin:boolean = await this.authService.authenticate()
    if(isLoggedin){
      return true
    }else{
      this.router.navigate(['/auth/login'])
      return false
    }

  }
}
