import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() messageFromChild = new EventEmitter<string>()
  @Input('productData')productData:any;

  constructor(private route:Router,private apiService:ApiService) { }

  ngOnInit(): void {
  }

  navigateToDetails(){
    this.apiService.setProductId(this.productData.id)
  }

}
