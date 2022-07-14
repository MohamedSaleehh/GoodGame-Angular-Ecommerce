import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private authService:AuthService) {
    
}


  ngOnInit(): void {
    this.authService.loggedIn.subscribe(res=>{
      this.loggedIn = res
    })
  }

}
