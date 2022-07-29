import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  filterCategory :any="";
  productlist:Array<Product>=[]
  constructor(private router:Router) {}
  filter(category : string){
      this.router.navigate(['/productlist', { category}]);
  }

  ngOnInit(): void {}

}
