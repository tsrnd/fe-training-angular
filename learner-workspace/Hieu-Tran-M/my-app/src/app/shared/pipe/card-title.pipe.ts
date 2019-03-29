import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardTitle'
})
export class CardTitlePipe implements PipeTransform {

  transform(value: string, args?: string): any {
    value = args;
    return value.toUpperCase();
  }

}
