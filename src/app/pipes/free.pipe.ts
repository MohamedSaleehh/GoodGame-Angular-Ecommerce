import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'free'
})
export class FreePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value == 0 ?"free":value;
  }

}
