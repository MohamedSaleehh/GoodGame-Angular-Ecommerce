import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value == 0 ?"out of stock":value;
  }

}
