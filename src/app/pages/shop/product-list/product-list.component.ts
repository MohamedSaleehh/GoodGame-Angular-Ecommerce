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
  page:number=1;
  pageSize:number =12;
  categoriesList:Array<string>=[];
    filteredProducts:Array<Product>=[];
    category: string = 'all';


  constructor(private apiService:ApiService ,private _CartService: CartService) {
    this.apiService.getProducts().subscribe(res =>{
      this.productlist =res;
    })



  }
  async ngOnInit() {
    
    this.loading = true;
    this.sub= this.apiService.getProducts().subscribe(
      (res:any)=>{
        console.log(res );
        this.productlist=res;
        this.filteredProducts = this.productlist;
      },
    (err:any)=>{
      console.log("erorr");

    },() => {
      this.loading = false;
    })

    this.getCategories()
  }



  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  actionFromParent(data:any){
    console.log(data, "from parent");
    console.log("mlcd,m,dm");

  }
  getCategories(){
    this.categoriesList = ['Race' ,'Action','Knockout','Adventure','Sports']      
  }
  filterProduct(event:any){
    this.category = event.target.value
    console.log(this.category);
    
    if (this.category == "all"){
      this.filteredProducts = this.productlist
    }else{

      this.filteredProducts=this.productlist.filter((product)=>
      product.category.find((x)=>{
        return x == this.category ;
      })
      )
      console.log(this.filteredProducts);
    }
  }

}
