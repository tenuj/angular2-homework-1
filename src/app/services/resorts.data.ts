export enum Activities{
  Fishing = 10,
  Hunting,
  Bathing,
  Swimming,
  All
}

export const resorts : Resort[] = [

  {
    id : 'c7e700a0-a8c9-4e28-a657-5d33e48b2c22',
    name : 'Hotel Rangá',
    activities : [ Activities.Fishing ],
    description : 'Этот уникальный отель расположен в городе Хелле, в 96 км к востоку от Рейкьявика.',
    phone : '(354) 487 5700',
    location :  {
      name : 'Sudurlandsvegur, 851 Хелла, Исландия',
      waterTemperature : 6,
      temperature      : 2
    },
    photos : [
      {
        tiny   : '1/r1.jpg',
        medium : '1/b1.jpg',
        big    : '1/1.jpg'
      },
      {
        tiny   : '1/r2.jpg',
        medium : '1/b2.jpg',
        big    : '1/2.jpg'
      },
      {
        tiny   : '1/r3.jpg',
        medium : '1/b3.jpg',
        big    : '1/3.jpg'
      }
    ],
    numFollowers : 0,
    numFollowing : 0
  },
  {
    id   : '5e2d103e-4839-44f7-b508-c23ccf3c6513',
    name : 'Litli Geysir',
    activities : [ Activities.Fishing, Activities.Hunting ],
    description : 'Отель Litli Geysir расположен на трассе 35.',
    phone : '+354 480 6800',
    location : {
       name : 'Geysir, 801 Haukadalur, Исландия',
       waterTemperature : 12,
       temperature      : -3
     },
    photos : [
      {
        tiny   : '2/r1.jpg',
        medium : '2/b1.jpg',
        big    : '2/1.jpg'
      },
      {
        tiny   : '2/r2.jpg',
        medium : '2/b2.jpg',
        big    : '2/2.jpg'
      },
      {
        tiny   : '2/r3.jpg',
        medium : '2/b3.jpg',
        big    : '2/3.jpg'
     }
   ],
    numFollowers : 0,
    numFollowing : 0

  },
  {
    id : 'eb5697b1-fdbd-4a36-b200-5b0a326ce174',
    name : 'Stracta Hotel Hella',
    activities : [ Activities.Bathing, Activities.Swimming ],
    description : ' Этот современный отель расположен неподалеку от достопримечательностей.',
    phone : '+354 531 8010',
    location : {
      name : 'Hella, 850 Хелла, Исландия',
      waterTemperature : 1,
      temperature      : -26
     },
    photos : [
      {
        tiny   : '3/r1.jpg',
        medium : '3/b1.jpg',
        big    : '3/1.jpg'
      },
      {
        tiny   : '3/r2.jpg',
        medium : '3/b2.jpg',
        big    : '3/2.jpg'
      },
      {
        tiny   : '3/r3.jpg',
        medium : '3/b3.jpg',
        big    : '3/3.jpg'
      }
    ],
    numFollowers : 0,
    numFollowing : 0
  },
  {
    id : 'b1e1de99-9d44-4bfd-817c-67ffd65396a6',
    name : 'Guesthouse Garun Heidmörk',
    activities : [ Activities.Bathing ],
    description : 'Этот гостевой дом с бесплатной гидромассажной ванной.',
    phone : '+354 864 3250',
    location : {
      name : 'Heidmörk 1a, 800 Селфосс, Исландия',
      waterTemperature : 6,
      temperature      : -72
    },
    photos : [
      {
        tiny   : '4/r1.jpg',
        medium : '4/b1.jpg',
        big    : '4/1.jpg'
      },
      {
        tiny   : '4/r2.jpg',
        medium : '4/b2.jpg',
        big    : '4/2.jpg'
      },
      {
        tiny   : '4/r3.jpg',
       medium : '4/b3.jpg',
       big    : '4/3.jpg'
     }
    ],
    numFollowers : 0,
    numFollowing : 0
  }

  ];
