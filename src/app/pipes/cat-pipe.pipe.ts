import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catPipe'
})
export class CatPipePipe implements PipeTransform {
transform(items: Array<any>, category: any): Array<any> {

  if(category.params.category == undefined ){
    return items
  }
  else{
    return items.filter((a:any)=>{if(a.category.includes(category.params.category) ){return a}})
  }
  }
  }

