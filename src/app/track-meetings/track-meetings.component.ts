import {Component, OnInit} from '@angular/core';
import {Meeting} from '../meeting';

@Component({
  selector: 'app-track-meetings',
  templateUrl: './track-meetings.component.html',
  styleUrls: ['./track-meetings.component.scss']
})
export class TrackMeetingsComponent implements OnInit {

  public meeting: Meeting;

  constructor(){
  }

  ngOnInit() {
    this.meeting = new Meeting();
  }
}
