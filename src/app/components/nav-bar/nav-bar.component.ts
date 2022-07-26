import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { WishListService } from './../../services/wish-list.service';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  toggled: boolean = false;
  wishCounter: number = 0;
  cartCounter: number = 0;
  loggedIn: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > 50) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  toggleAdd() {
    let element = document.querySelector('.navbar') as HTMLElement;
    this.toggled = true;
    element.classList.add('navbar-inverse');
  }
  toggleRemove() {
    this.toggled = false;
  }
  constructor(
    private _wishListService: WishListService,
    private _CartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this._CartService.getCounter().subscribe((cartCount) => {
      this.cartCounter = cartCount;
    });
    this.authService.loggedIn.subscribe((res) => {
      this.loggedIn = res;
      if (this.loggedIn) {
        // this._wishListService.getWishListArr().subscribe((data) => {
        //   this.wishCounter = data.length;
        // });
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_info');
    this.authService.setLoggedIn(false);
  }
}
