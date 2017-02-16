type LocationData = {
  name             : string;
  waterTemperature : number;
  temperature      : number;
}

type Photo = {
  tiny   : string;
  medium : string;
  big    : string;
}

type Resort = {
  id            : string;
  name          : string;
  activities    : number[];
  description   : string;
  phone         : string;
  photos        : Photo[];
  numFollowers  : number;
  numFollowing  : number;
  location      : LocationData;
}
