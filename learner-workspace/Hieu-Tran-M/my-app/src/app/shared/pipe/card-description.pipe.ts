import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardDescription'
})
export class CardDescriptionPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.length > args) {
      value = value.slice(0, args).concat('...');
    }
    return value;
  }

}
