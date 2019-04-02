import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardTitle'
})
export class CardTitlePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toUpperCase();
  }

}
