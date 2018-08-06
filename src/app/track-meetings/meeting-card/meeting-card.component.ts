import { Component, OnInit } from '@angular/core';
import {Meeting} from '../../meeting';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-meeting-card',
  templateUrl: './meeting-card.component.html',
  styleUrls: ['./meeting-card.component.scss']
})
export class MeetingCardComponent implements OnInit {

  public meeting: Meeting;
  currentRate = 8;

  constructor() { }

  ngOnInit() {
    this.meeting = new Meeting();
    this.meeting.title = 'Stand Up';
    this.meeting.project = 'Charter Communications';
    const date: NgbDateStruct = {year: 2018, month: 8, day: 3 };
    this.meeting.date = date;
    this.meeting.duration = 30;
    this.meeting.preparationTime = 5;
  }

}
