import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(private apiService:ApiService) { }

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

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  actionFromParent(data:any){
    console.log(data, "from parent");
    console.log("mlcd,m,dm");

  }

}
