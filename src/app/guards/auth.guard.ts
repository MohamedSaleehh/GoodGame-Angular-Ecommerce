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
 

  async canActivate(): Promise<boolean > {
    let isLoggedin:boolean = false
    
    this.authService.loggedIn.subscribe(state=>{
      isLoggedin = state
    })
    if(isLoggedin){
      return true
    }else{
      try{
        const user_id = JSON.parse(localStorage.getItem("user_info") as string).id
        const url = `https://gg-store.herokuapp.com/users/${user_id}`
        const res = await firstValueFrom(this.http.get(url)) 
        if(res){ 
          return true
        }
        this.router.navigate(['/auth/login'])
        return false
      }catch{
        this.router.navigate(['/auth/login'])
        return false
      }
      
      
      
    }
  
  }
}
