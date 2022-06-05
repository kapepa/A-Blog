import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUp'
})
export class FirstUpPipe implements PipeTransform {

  transform(value: string): string {
    const firstLetter = value.charAt(0).toUpperCase();
    return `${firstLetter}${value.substring(1)}`;
  }

}
