import { Pipe, PipeTransform } from '@angular/core';
import { Activities } from '../../services/resorts.data';

@Pipe({
  name: 'resortActivity'
})
export class ResortActivityPipe implements PipeTransform {

  public transform( resorts : Resort[], activity : number ): Resort[]
  {
    return ( activity == Activities.All ) ? resorts : resorts.filter( ( resort ) => { return resort.activities.indexOf( activity ) != -1 } );
  }

}
