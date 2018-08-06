import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class Meeting {
  title: string;
  description: string;
  date: NgbDateStruct;
  tags: string[];
  duration: number;
  preparationTime: number;
  project: string;
  rating: number;
}
