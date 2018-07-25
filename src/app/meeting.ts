import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class Meeting {
  title: string;
  description: string;
  date: NgbDateStruct;
  tags: string[];
  durration: number;
  project: string;
}
