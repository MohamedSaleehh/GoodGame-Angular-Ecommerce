import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  toggled: boolean = false;
  loggedIn: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > 10) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  toggleAdd() {
    let element = document.querySelector('.navbar') as HTMLElement;
    let toggle = document.querySelector('.navbar-toggle') as HTMLElement;
    this.toggled = true;
    element.classList.add('navbar-inverse');
    toggle.classList.add('navbar-toggler');
  }
  toggleRemove() {
    let element = document.querySelector('.navbar') as HTMLElement;
    let toggle = document.querySelector('.navbar-toggle') as HTMLElement;
    this.toggled = false;
    toggle.classList.remove('navbar-toggler');
    // element.classList.remove('navbar-inverse');
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user_info")
    this.authService.setLoggedIn(false)
  }
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe(res=>{
      this.loggedIn = res
    })
  }
}
