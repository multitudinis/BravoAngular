import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'estruturante': return 'code';
      case 'planejamento': return 'circle'
    }
    return 'computer';
  }
}
