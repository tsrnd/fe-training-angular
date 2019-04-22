import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collapseText'
})
export class CollapseTextPipe implements PipeTransform {
  // it's subString when value has length overcome maxlength
  transform(value: string, maxLength: number): any {
    if (value.length > maxLength) {
      // tslint:disable-next-line: prefer-const
      let newStr: string = value.substr(0, maxLength) + '...';
      return newStr;
    }
    return value;
  }
}
