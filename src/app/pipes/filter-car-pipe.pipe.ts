import { Car } from './../models/car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCarPipe',
})
export class FilterCarPipePipe implements PipeTransform {
  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (car: Car) =>
            car.descriptions.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
