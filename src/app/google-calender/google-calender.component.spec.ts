import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCalenderComponent } from './google-calender.component';

describe('GoogleCalenderComponent', () => {
  let component: GoogleCalenderComponent;
  let fixture: ComponentFixture<GoogleCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
