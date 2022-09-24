import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray'
})
export class ObjectToArrayPipe implements PipeTransform {

  transform(object: any[]) {
    if(object){
  return  Object.values(object);
    }

  return null
  }

}
