import { Component } from '@angular/core';
import { GuardsCheckStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GoodGame-Angular-Ecommerce';
  constructor(private authService: AuthService,private router: Router){
    this.router.events.pipe(filter(event => event instanceof GuardsCheckStart)).subscribe(()=>{
        this.authService.authenticate()
    })
  }

}
