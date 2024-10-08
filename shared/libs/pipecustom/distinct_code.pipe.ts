import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distinctCode',
})
export class DistinctCodePipe implements PipeTransform {
  transform(variants: any[], key: string): any[] {
    if (!variants || !key) {
      return [];
    }

    const uniqueValues = variants
      .map((variant) => variant[key])
      .filter((value, index, self) => self.indexOf(value) === index);

    return variants.filter((variant) => uniqueValues.includes(variant[key]));
  }
}
