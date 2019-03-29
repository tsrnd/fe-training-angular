import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
})
export class PipePipe implements PipeTransform {
  newPipe: string;
  transform(value: any, maxLength: number): any {
    if (value.length > maxLength) {
      this.newPipe = value.substr(0, maxLength) + '...';
    }
    return this.newPipe;
  }

}
