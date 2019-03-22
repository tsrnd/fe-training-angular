import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    if (value.length >args) {
      return value.slice(0,args) + "...";
    }
    return (value);
  }

}
