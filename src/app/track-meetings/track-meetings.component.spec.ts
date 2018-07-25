import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMeetingsComponent } from './track-meetings.component';

describe('TrackMeetingsComponent', () => {
  let component: TrackMeetingsComponent;
  let fixture: ComponentFixture<TrackMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
