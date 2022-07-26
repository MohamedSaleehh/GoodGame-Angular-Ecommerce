import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['PRODUCT', 'PRICE'];
  products:Array<Product>= [];
  order:Order= {
    _id:'',
    products:[],
    status:false,
    total_price:0,
    user_id:''
  }
  constructor(private orderService: OrderService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.order.total_price=0
    const order_id = this.route.snapshot.paramMap.get('order_id')
    this.orderService.singleOrder(order_id!).subscribe((data:any)=>{
      this.products = data.products
      this.order = data
      console.log(this.order);
      
      
    },
    err=>{
      console.log("order doesn't exist");
      
    }
    )
  }

}
