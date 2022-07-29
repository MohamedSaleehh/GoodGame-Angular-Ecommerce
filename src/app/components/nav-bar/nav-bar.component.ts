import { CurrencyServiceService } from './../../services/currency-service.service';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { WishListService } from './../../services/wish-list.service';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from './../../services/api.service';
import { Product } from 'src/app/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  username : string = 'Guest'
  toggled: boolean = false;
  sidebar: boolean = false;
  nav: boolean = false;
  wishCounter: number = 0;
  cartCounter: number = 0;
  loggedIn: boolean = false;
  myproducts: Array<Product> = [];
  keyword = 'name';
  terms:any;
  public searchFilter: any = '';
  data : Array<Product> = []
  searchForm = new FormGroup({
    name: new FormControl(''),
  });
  search() {
    const names = this.searchForm.get('name')?.value
    console.log(names);
    this.router.navigate(['/productlist',{names}]);
}
  toggleAdd() {
    let element = document.querySelector('.navbar') as HTMLElement;
    this.toggled = true;
    element.classList.add('navbar-inverse');
  }
  toggleRemove() {
    this.toggled = false;
  }


  open() { 
    let side = document.querySelector('.removeside') as HTMLElement;
    let nav = document.querySelector('.navbar') as HTMLElement;
    if (side && nav){
    side.classList.add('showside');
    side.classList.remove('removeside');
    nav.classList.add('navy');
    side.classList.remove('navbar');
    }

    
  }
  
  close() {
    let side = document.querySelector('.showside') as HTMLElement;
    let nav = document.querySelector('.navbar') as HTMLElement;
    if (side && nav){
    side.classList.remove('showside');
    side.classList.add('removeside');
    nav.classList.add('navbar');
    side.classList.remove('navy');
    }
  }



  constructor(private _wishListService:WishListService
    ,private _CartService:CartService,private authService: AuthService,
    private apiService:ApiService,private router: Router,private currency:CurrencyServiceService,private snackBar: MatSnackBar
    ) {

    this.apiService.getProducts().subscribe((res)=>{
      this.data =res;
    });
  }
  showSnackbarTopPosition(content:any, action:any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      panelClass: ["custom-style"],
      verticalPosition: "bottom", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
  ngOnInit(): void {

    this._CartService.getCounter().subscribe((cartCount) =>{
      this.cartCounter = cartCount;
    })
    this.authService.loggedIn.subscribe(res=>{
      this.username = 'Guest'
      this.loggedIn = res
      if(this.loggedIn){
        this._wishListService.getWishListArr().subscribe((data) => {
          this.wishCounter = data.length;
        });
        this.username = JSON.parse(localStorage.getItem('user_info') as any).username

      }

    })
       
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_info');
    this.authService.setLoggedIn(false);
  }

  changeCurrency(selectedCurrency :string){

    this.currency.currentCurrency.next(selectedCurrency);

    console.log(this.currency.currentCurrency.value);
    

  }


}
