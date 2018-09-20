import {Component, Input, OnInit} from '@angular/core';
import {Meeting} from '../meeting';

@Component({
  selector: 'app-readonly-card',
  templateUrl: './readonly-card.component.html',
  styleUrls: ['./readonly-card.component.scss']
})
export class ReadonlyCardComponent implements OnInit {

  @Input() meeting: Meeting;
  constructor() { }

  ngOnInit() {
  }

}
