import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ApiService } from 'src/app/services/api.service';
import { WishListService } from './../../../services/wish-list.service';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  wishList: Array<Product> = [];
  productlist:Array<Product>=[]
  sub:any;
  loading: boolean = false;

  constructor(private apiService:ApiService ,private _wishListService:WishListService,private _CartService: CartService) {
    this.apiService.getProducts().subscribe(res =>{
      this.productlist =res;
      // this._CartService.loadCart()
    })
    this._wishListService.getWishListArr().subscribe(data=>{
      this.wishList = data
  })
  // this._CartService.getProduct().subscribe((data: any) => {
  //   // if(data.length === 0){
  //     console.log(typeof data)
  //   this.productlist = data;
  //   // }
  //   // else {
  //   //   this.myproducts = this._CartService.loadCart();;
  //   // }
  // });

  }

  ngOnInit(): void {

    this.loading = true;
    this.sub= this.apiService.getProducts().subscribe(
      (res:any)=>{
        console.log(res );
        this.productlist=res;
      },
    (err:any)=>{
      console.log("erorr");

    },() => {
      this.loading = false;
    })
    // this._CartService.loadCart();
    // console.log(typeof
    //   this._CartService.getProducts());
    // // this.myproducts = JSON.parse(JSON.stringify(this._CartService.getProducts()));
    // this.productlist = this._CartService.getProducts();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  actionFromParent(data:any){
    console.log(data, "from parent");
    console.log("mlcd,m,dm");

  }

}
