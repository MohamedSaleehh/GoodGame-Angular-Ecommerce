import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {


  currentCurrency = new BehaviorSubject ("euro") ;


  constructor() { }
}
