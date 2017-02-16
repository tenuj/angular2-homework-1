import { Injectable } from '@angular/core';
import { resorts, Activities } from './resorts.data';

@Injectable()
export class ResortsService {

  public constructor()
  {
    setInterval( () => { this.onInterval() }, 500 );
  }

  public allActivities : number[] = [ Activities.Fishing, Activities.Hunting, Activities.Bathing, Activities.Swimming, Activities.All ];

  public getResorts() : Resort[]
  {
    for ( let i : number = 0; i < resorts.length; i ++ )
    {
      let resort : Resort     = resorts[ i ];
      resort.numFollowers = this.getRandomValue();
      resort.numFollowing = this.getRandomValue();
    }

    return resorts;
  }

  public getActivityLabel( activity : number ) : string
  {
    switch( activity )
    {
      case Activities.Fishing  : return 'Рыбалка';
      case Activities.Hunting  : return 'Охота';
      case Activities.Bathing  : return 'Баня';
      case Activities.Swimming : return 'Плавание';
      default                : return 'Любая';
    }
  }

  private getRandomValue() : number
  {
    return 100 + Math.round( Math.random() * 100000 );
  }

  private onInterval()
  {
    for ( let i : number = 0; i < resorts.length; i ++ )
    {
      let resort : Resort     = resorts[ i ];
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
