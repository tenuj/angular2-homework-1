import { Photo }    from './photo';
import { Location } from './location';

export interface Resort
{
  id            : string;
  name          : string;
  description   : string;
  phone         : string;
  photos        : Photo[];
  numFollowers? : number;
  numFollowing? : number;
  location      : Location;
}
