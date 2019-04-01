import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLength'
})
export class ContentLengthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > args) {
      value = value.substring(0, args);
    }
    return value;
  }

}
