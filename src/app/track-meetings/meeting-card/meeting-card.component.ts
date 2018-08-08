import {Component, Input, OnInit, Output} from '@angular/core';
import {Meeting} from '../../meeting';

@Component({
  selector: 'app-meeting-card',
  templateUrl: './meeting-card.component.html',
  styleUrls: ['./meeting-card.component.scss']
})
export class MeetingCardComponent implements OnInit {

  @Input() launchModal: any;
  @Input() meeting: Meeting;
  @Input() removeFromList: any;

  // public meeting: Meeting;
  currentRate = 8;

  constructor() { }

  ngOnInit() {
  }

  public editCard() {
    this.launchModal(this.meeting);
  }

  public remove() {
    this.removeFromList(this.meeting);
  }
}
