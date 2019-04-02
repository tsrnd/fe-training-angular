import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitcontent'
})
export class LimitcontentPipe implements PipeTransform {
  transform(value: string, limit: number): any {
    return value.length > limit ? `${value.substr(0, limit)}...` : value;
  }
}
