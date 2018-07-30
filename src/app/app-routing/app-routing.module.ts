import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from '../landing/landing.component';
import {TrackMeetingsComponent} from '../track-meetings/track-meetings.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'track', component: TrackMeetingsComponent}
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
