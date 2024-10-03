import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'searchItem'
  })
  export class SearchItemPipe implements PipeTransform {
  
    transform(items: any[], term: string): any[] {
      if (!items || !term) {
        return items;
      }
      term = term.toLowerCase();
      return items.filter((item) => item.title.toLowerCase().includes(term));
    }
  
  }