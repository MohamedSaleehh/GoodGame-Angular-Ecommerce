import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  productList : Array<Product> = []
  constructor(private apiService:ApiService) {
    this.apiService.getProducts().subscribe((res)=>{
      this.productList = res.slice(8,16)
    })
  }
  get sortData() {
    return this.productList.sort((a, b) => {
      return <any>new Date(b.createdAt) - <any>new Date(a.createdAt);
    });
  }
  get sortRating() {
    return this.productList.sort((a, b) => {
      return ((a.rating > b.rating ? -1 : 1));
    });
  }
  ngOnInit(): void {}
}
