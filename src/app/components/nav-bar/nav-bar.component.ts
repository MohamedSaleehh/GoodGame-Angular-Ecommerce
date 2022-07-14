import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { WishListService } from './../../services/wish-list.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  toggled: boolean = false;
  wishCounter: number = 0;
  cartCounter:number =0;
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
  constructor(private _wishListService:WishListService ,private _CartService:CartService) {
    this._wishListService.getWishListArr().subscribe((data) => {
      this.wishCounter = data.length;
    });
  }

  ngOnInit(): void {
    // this._CartService.loadCart();
    // this.cartCounter = this._CartService.getProducts().length;
    this._CartService.getCounter().subscribe((cartCount) =>{
      this.cartCounter = cartCount;
    })
}
}
