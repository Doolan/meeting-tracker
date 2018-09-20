import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyCardComponent } from './readonly-card.component';

describe('ReadonlyCardComponent', () => {
  let component: ReadonlyCardComponent;
  let fixture: ComponentFixture<ReadonlyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
