import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catPipe'
})
export class CatPipePipe implements PipeTransform {
transform(items: Array<any>, category: any): Array<any> {
  // console.log(category.params.category);

  if(category.params.category == undefined ){
    return items
  }
  else{
    return items.filter((a:any)=>{if(a.category.includes(category.params.category) ){return a}})
  }
  }
  }

