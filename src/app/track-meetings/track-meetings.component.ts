import {Component, OnInit} from '@angular/core';
import {Meeting} from '../meeting';
import {ModalDismissReasons, NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-track-meetings',
  templateUrl: './track-meetings.component.html',
  styleUrls: ['./track-meetings.component.scss']
})
export class TrackMeetingsComponent implements OnInit {

  private static selectedMeeting: Meeting;
  private static edit = false;
  public meeting: Meeting;
  public static meetings: Meeting[];
  private closeResult: string;


  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  constructor(private modalService: NgbModal) {
    // this.meeting = new Meeting;

    TrackMeetingsComponent.meetings = [
      {
        title: 'Dev Planning',
        date: {year: 2018, month: 7, day: 30},
        project: 'Internal',
        duration: 90,
        rating: null,
        preparationTime: 0,
        description: '',
        tags: [],
      },
      {
        title: 'Stand Up',
        date: {year: 2018, month: 7, day: 31},
        project: 'Telecom Communications',
        duration: 30,
        rating: null,
        preparationTime: 0,
        description: '',
        tags: [],
      },
      {
        title: 'Stand Up',
        date: {year: 2018, month: 8, day: 1},
        project: 'Telecom Communications',
        duration: 30,
        rating: null,
        preparationTime: 0,
        description: '',
        tags: [],
      },
      {
        title: 'Driven Planning',
        date: {year: 2018, month: 8, day: 1},
        project: 'Internal',
        duration: 120,
        rating: null,
        preparationTime: 0,
        description: '',
        tags: [],
      },
      {
        title: 'Stand Up',
        date: {year: 2018, month: 8, day: 3},
        project: 'Telecom Communications',
        duration: 30,
        rating: null,
        preparationTime: 0,
        description: '',
        tags: [],
      },
      {
        title: 'Playback and Retrospective',
        date: {year: 2018, month: 8, day: 3},
        project: 'Internal',
        duration: 150,
        rating: null,
        preparationTime: 0,
        description: '',
        tags: [],
      },
    ];
  }

  ngOnInit() {
    this.meeting = new Meeting();
    this.meeting.date = this.buildToday();
  }

  SelectProject(project: string) {
    this.meeting.project = project;
  }

  public launchModal(content) {
    if (TrackMeetingsComponent.edit) {
      this.meeting = TrackMeetingsComponent.selectedMeeting;
    }
    this.modalService.open(content, {centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (!TrackMeetingsComponent.edit) {
        TrackMeetingsComponent.meetings.push(this.meeting);
      }
      this.meeting = new Meeting();
      this.meeting.date = this.buildToday();
      TrackMeetingsComponent.edit = false;
    }, (reason) => {
      this.closeResult = `Dismissed ${TrackMeetingsComponent.getDismissReason(reason)}`;
      // console.log(this.meeting);
      this.meeting = new Meeting();
      this.meeting.date = this.buildToday();
      TrackMeetingsComponent.edit = false;
    });
  }

  public launchEdit(cardMeeting: Meeting) {
    TrackMeetingsComponent.edit = true;
    TrackMeetingsComponent.selectedMeeting = cardMeeting;
    const element: HTMLElement = document.getElementById('modalLaunch') as HTMLElement;
    element.click();
  }

  public removeFromList(meeting: Meeting) {
    TrackMeetingsComponent.meetings = TrackMeetingsComponent.meetings
      .filter(item =>  item !== meeting);
  }

  private buildToday(): NgbDateStruct {
    const date = new Date();
    const ngbDateStruct = { day: date.getUTCDate(), month: date.getUTCMonth() + 1, year: date.getUTCFullYear()};
    return ngbDateStruct;
  }

  public getMeetings() {
    return TrackMeetingsComponent.meetings;
  }
}
