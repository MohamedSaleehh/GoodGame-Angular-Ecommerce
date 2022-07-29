import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from './../../../services/cart.service';
import { ActivatedRoute } from '@angular/router';

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
  terms:any="" ;
  name:any;
  filterCat:any=""
  constructor(private apiService:ApiService
    ,private _CartService: CartService,
    private route:ActivatedRoute) {
    this.apiService.getProducts().subscribe(res =>{
      this.productlist =res;
    })
    // this.name = route.snapshot.paramMap.get("name")
    route.paramMap.subscribe(filters => {
        console.log(filters);
        this.terms = filters
    });
    route.paramMap.subscribe(filterCategory => {
        console.log(filterCategory);
        this.filterCat = filterCategory;
        console.log( this.filterCat );
  });
  }
  async ngOnInit() {

    this.loading = true;
    this.sub= this.apiService.getProducts().subscribe(
      (res:any)=>{
        this.productlist=res;
        this.filteredProducts = this.productlist;
      },
    (err:any)=>{
      console.log("erorr");

    },() => {
      this.loading = false;
    })

    this.getCategories();
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
