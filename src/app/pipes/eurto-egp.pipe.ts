import { CurrencyServiceService } from './../services/currency-service.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eURToEGP',
  pure: false
})
export class EURToEGPPipe implements PipeTransform {

  currencyPrice : string = "";

  constructor(private currencyService:CurrencyServiceService) {
    
    this.currencyService.currentCurrency.subscribe((r)=>{
      this.currencyPrice = r;
    })
    
  }
  

  transform(value: number ): any {
    if(this.currencyPrice == "euro"){
      return (`${value} EUR`)
    }else if (this.currencyPrice == "egypt") {

      
      return (`${value * 20} EGP`)
    }else{
      return (`${value /2} $`)
    }

    
  }
}
