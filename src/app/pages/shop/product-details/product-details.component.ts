import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

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
  constructor(private activatedRoute:ActivatedRoute ,private apiService:ApiService,private _CartService:CartService) { 
  }

  ngOnInit(): void {
    this.page = 1;
    this.loading = true;
    this.sub= this.apiService.getProducts().subscribe(
      (res:any)=>{
        this.productlist=res;
        console.log(this.productlist);
        this.productId = this.activatedRoute.snapshot.paramMap.get('id');
        // this.product = this.productlist.filter((i:any)=> i.id == this.productId)
        this.apiService.getProductById(this.productId).subscribe(res => {
    
          this.product= res ;
          console.log(this.product.category);
          
        this.filteredProducts =this.productlist.filter((product)=>
          product.category.find((x)=>{
            return x == this.product.category ;
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
    this._CartService.addProduct(product)
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe()
    
  }


}
