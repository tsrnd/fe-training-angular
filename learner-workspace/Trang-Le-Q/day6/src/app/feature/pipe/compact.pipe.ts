import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compact'
})
export class CompactPipe implements PipeTransform {

  transform(value: string, len: number): string {
    return value.slice(0, len) + '...';
  }

}
