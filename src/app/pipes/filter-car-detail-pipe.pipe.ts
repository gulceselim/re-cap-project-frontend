import { CarDetails } from './../models/carDetails';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCarDetailPipe',
})
export class FilterCarDetailPipePipe implements PipeTransform {
  transform(value: CarDetails[], filterText: string): CarDetails[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (carDetail: CarDetails) =>
            carDetail.brandName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
