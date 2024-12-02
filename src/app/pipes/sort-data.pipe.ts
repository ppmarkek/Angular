import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData',
  // pure: false
})
export class SortDataPipe implements PipeTransform {
  transform(value: any[], field: string): any[] {
    if (!value || !field) return value;
    return value.sort((a, b) => a[field] > b[field] ? 1 : -1);
  }
}
