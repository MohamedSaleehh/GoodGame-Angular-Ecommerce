import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first, firstValueFrom, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router: Router, private http:HttpClient){}
 

  canActivate(): boolean  {
    let isLoggedin:boolean = false
    
    this.authService.loggedIn.subscribe(state=>{
      isLoggedin = state
    })
    if(isLoggedin){
      return true
    }else{
      this.router.navigate(['/auth/login'])
      return false
    }
  
  }
}
