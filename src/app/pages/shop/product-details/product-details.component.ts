import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productlist:Array<Product>=[]
  sub:any;
  product :any;
  productId : any;
  filteredProducts:Array<Product>=[];
  category?: string
  loading: boolean = false;
  page = 1;
  pageSize =4;
  clicked: boolean = false;
  inputquantity:number = 1;
  constructor(private activatedRoute:ActivatedRoute ,private apiService:ApiService,private _CartService:CartService,private snackBar: MatSnackBar) { 
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
    this.page = 1;
    this.loading = true;
    this.sub= this.apiService.getProducts().subscribe(
      (res:any)=>{
        this.productlist=res;
        this.productId = this.activatedRoute.snapshot.paramMap.get('id');
        this.apiService.getProductById(this.productId).subscribe(res => {
    
          this.product= res ;
          
        this.filteredProducts =this.productlist.filter((product)=>
          product.category.find((x)=>{
            return x == this.product.category.find((y:any)=>{

              return x == y

            })
          }) && product._id != this.productId
          
          )
          
        })
      },
    (err:any)=>{
      console.log("erorr");
      
    },() => {
      this.loading = false;
    }
    

    )
    
    
  }
  addtocart(product: Product) {
    for(let i =0 ;i < this.inputquantity; i++){
       this._CartService.addProduct(product)
    }
   
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe()
    
  }


}
