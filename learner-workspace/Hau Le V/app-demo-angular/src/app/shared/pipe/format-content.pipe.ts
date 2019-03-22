import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'formatContent'
})
export class FormatContentPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    if (value.length >args) {
      return value.slice(0,args) + "...";
    }
    return (value);
  }

}
