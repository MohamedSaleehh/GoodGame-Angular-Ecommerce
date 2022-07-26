import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})



export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['ORDER', 'PRODUCTS', 'DATE', 'STATUS','TOTAL','ACTIONS'];
   ordersList:Array<Order>= [];
  constructor(private orderService: OrderService, private router:Router) { }

  ngOnInit(): void {
    this.orderService.allOrders.subscribe((data:any)=>{
      this.ordersList = data
      console.log(this.ordersList);
      
    })

  }
  details(order:Order){
    console.log(order);
    
    this.router.navigate([`/auth/orders/${order._id}`],)
  }

}
