import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'estruturante': return 'green';
      case 'planejamento': return 'red';
    }
    return 'computer';
  }

}
