import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperfirst'
})
export class UpperfirstPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toUpperCase();
  }

}
