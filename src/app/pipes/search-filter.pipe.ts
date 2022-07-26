import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args: any): any {
      if(!value)return null;
      if(!args)return value;
      console.log(value.filter((element:any )=> element.name.includes(args.params.names)))
      if(args.params.names == undefined ){
        return value
      }
      else{
        return value.filter((element:any )=> element.name.toLowerCase().includes(args.params.names.toLowerCase()))
      }
  }
}
