import { Brand } from './../models/brand';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBrandPipe',
})
export class FilterBrandPipePipe implements PipeTransform {
  transform(value: Brand[], filterText: string): Brand[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (brand: Brand) =>
            brand.brandName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
