import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumber'
})
export class RoundNumberPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = 0): number {
    if (isNaN(value)) {
      return value;
    }
    const multiplier = Math.pow(10, decimalPlaces);

    return Math.round(value * multiplier) / multiplier;
  }

}
