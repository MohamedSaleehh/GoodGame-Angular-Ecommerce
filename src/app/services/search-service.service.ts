import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor() { }
  _data : any;
  setData(val:any) {
      this._data = val;
  }
  getData():Observable<any> {
      return this._data;
  }
}
