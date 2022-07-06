import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productlist:Array<Product>=[]
  sub:any;
  product :any;
  productId : any;
  loading: boolean = false;

  constructor(private activatedRoute:ActivatedRoute ,private apiService:ApiService) { }

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
    }
    

    )
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.product = this.productlist.filter((i:any)=> i.id == this.productId)
    this.apiService.getProductById(this.productId).subscribe(res => {

      this.product= res ;
      console.log(res);
      

    })
  }

  

}
