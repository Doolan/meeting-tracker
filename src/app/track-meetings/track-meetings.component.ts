import {Component, OnInit } from '@angular/core';
import {Meeting} from '../meeting';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-track-meetings',
  templateUrl: './track-meetings.component.html',
  styleUrls: ['./track-meetings.component.scss']
})
export class TrackMeetingsComponent implements OnInit {

  public meeting: Meeting;
  closeResult: string;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.meeting = new Meeting();
  }

  SelectProject(project: string) {
    this.meeting.project = project;
  }

  public launchModal(content) {
    this.modalService.open(content, {centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${TrackMeetingsComponent.getDismissReason(reason)}`;
    });
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
