import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from '../landing/landing.component';
import {TrackMeetingsComponent} from '../track-meetings/track-meetings.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {MeetingCardComponent} from '../track-meetings/meeting-card/meeting-card.component';
import {GoogleCalenderComponent} from '../google-calender/google-calender.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'track', component: TrackMeetingsComponent},
  {path: 'card', component: MeetingCardComponent},
  {path: 'google', component: GoogleCalenderComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
