import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compactContent'
})
export class CompactContentPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    return `${value.substr(0, limit)}...`;
  }

}
