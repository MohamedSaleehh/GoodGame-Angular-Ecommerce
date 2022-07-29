import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catPipe'
})
export class CatPipePipe implements PipeTransform {
// category=["Xpox","Pc","Ps"];
transform(items: Array<any>, category: any): Array<any> {
  console.log(category.params.category);

  if(category.params.category == undefined ){
    return items
  }
  else{


    return items.filter((a:any)=>{if(a.category.includes(category.params.category)){return a}})
  }
  }
  }

  // return items.filter((product)=>
  // product.category.find((e :any)=>{
  //   return e == category.params.category ;
  // }));
//   if(category.params.category == undefined ){
//   return items
// }
// else{
//   return items.filter((product)=>{

//     return product.category.find((e :any)=>{
//         e == category.params.category ;
//     })
//   })
// }
// }
// }
