import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distinctCode',
  standalone: true
})
export class DistinctCodePipe implements PipeTransform {
  transform(variants: any[], key: string): any[] {

  const distinctVariants = variants.reduce((acc, variant) => {
    const keyValue = variant[key];
    const existing = acc.find((item: { [x: string]: any; }) => item[key] === keyValue);

    if (existing) {
    existing.cover.push(variant);
    } else {
    acc.push({
      [key]: keyValue,
      cover: [variant]
    });
    }

    return acc;
  }, []);

  return distinctVariants;
  }
}

