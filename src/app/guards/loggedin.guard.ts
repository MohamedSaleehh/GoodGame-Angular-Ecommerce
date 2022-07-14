import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
  constructor(private authService:AuthService, private router: Router){}

  async canActivate(): Promise<boolean>  {
    
    await this.authService.authenticate()
    const isLoggedin:boolean = await firstValueFrom(this.authService.loggedIn)
    console.log(isLoggedin);
    
    if(!isLoggedin){
      return true
    }else{
      this.router.navigate([''])
      return false
    }
  
  }
  
}
