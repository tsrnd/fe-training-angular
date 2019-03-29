import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    console.log(args);
    if (args && value.length > args) {
      return value.slice(0, args) + '...';
    }
    return value;
  }

}
