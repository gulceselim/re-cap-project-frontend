import { Color } from './../models/color';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColorPipe',
})
export class FilterColorPipePipe implements PipeTransform {
  transform(value: Color[], filterText: string): Color[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (color: Color) =>
            color.colorName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
