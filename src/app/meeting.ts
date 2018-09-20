import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class Meeting {
  title: string;
  date: NgbDateStruct;
  project: string;
  duration: number;
  rating: number;
  preparationTime: number;
  description: string;
  tags: string[];
}

//{
//   title: 'Stand Up',
//     date: {year: 2018, month: 8, day: 3 },
//   project: 'Telecom Communications',
//     duration: 30,
//   rating: null,
//   preparationTime: 0,
//   description: '',
//   tags: [],
// };
