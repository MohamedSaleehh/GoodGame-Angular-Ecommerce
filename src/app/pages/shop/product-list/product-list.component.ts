import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from './../../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  filterCat:any="";
  status: string = '';
  constructor(private apiService:ApiService
    ,private _CartService: CartService,
    private route:ActivatedRoute,private router:Router) {

    this.apiService.getProducts().subscribe(res =>{
      this.productlist =res;
    })
    this.name = route.snapshot.paramMap.get("name")


    route.paramMap.subscribe(filters => {
        this.terms = filters
    });
    route.paramMap.subscribe(filterCategory => {
        this.filterCat = filterCategory;
  });
  }
  ngOnInit() {
    if(this.filterCat.params.category ){
      this.activeMenu(this.filterCat.params.category)
    }
    else{
      this.activeMenu('all')
    }
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
  activeMenu(cat:string){
    this.status = cat;
}
  filterProduct(category:any){
    if(category == 'all'){
      this.router.navigate(['/productlist']);
    }else{
    this.router.navigate(['/productlist', { category}]);
    }
    this.filteredProducts=this.productlist.filter((a :any)=>{if(a.category.includes(category) || category == 'all'){return a}
        })}
  }



