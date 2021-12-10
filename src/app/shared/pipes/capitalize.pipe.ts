import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(str: string): string {
    str = str.toLocaleLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
  }

}
