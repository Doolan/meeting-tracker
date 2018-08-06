import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {CheckboxButtonsComponent} from './checkbox-buttons/checkbox-buttons.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GoogleCalenderComponent} from './google-calender/google-calender.component';
import {LandingComponent} from './landing/landing.component';
import {ChartsModule} from 'ng2-charts';
import {TrackMeetingsComponent} from './track-meetings/track-meetings.component';
import {MeetingCardComponent} from './track-meetings/meeting-card/meeting-card.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LandingComponent,
    TrackMeetingsComponent,
    CheckboxButtonsComponent,
    DashboardComponent,
    MeetingCardComponent,
    GoogleCalenderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    NgSelectModule
  ],
  providers: []
})
export class AppModule {
}
