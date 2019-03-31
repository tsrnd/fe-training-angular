import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordLimit'
})
export class WordLimitPipe implements PipeTransform {

  transform(value: string, length: number): any {
    const rest = '...';
    let truncatedText = '';

    if (value.length <= length) {
      return value;
    } else {
      truncatedText = value.slice(0, length - 3 );
    }
    return truncatedText + rest;
  }

}
