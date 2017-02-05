import { Injectable } from '@angular/core';
import { RESORTS }    from '../mocks/resorts';
import { Resort }     from '../vo/resort';

@Injectable()
export class ResortsService {

  public constructor()
  {
    setInterval( () => { this.onInterval() }, 500 );
  }

  private getRandomValue() : number
  {
    return 100 + Math.round( Math.random() * 100000 );
  }

  public getResorts() : Resort[]
  {
    for ( let i : number = 0; i < RESORTS.length; i ++ )
    {
      let resort : Resort     = RESORTS[ i ];
          resort.numFollowers = this.getRandomValue();
          resort.numFollowing = this.getRandomValue();
    }

    return RESORTS;
  }

  private onInterval()
  {
    for ( let i : number = 0; i < RESORTS.length; i ++ )
    {
      let resort : Resort     = RESORTS[ i ];
      resort.numFollowers += this.getNextIncrease();
      resort.numFollowing += this.getNextIncrease();
    }
  }

  private getNextIncrease() : number
  {
    if ( Math.random() > 0.5 )
    {
      return Math.round( Math.random() * 10 );
    }

    return 0;
  }

}
