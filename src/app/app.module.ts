import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LandingComponent} from './landing/landing.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TrackMeetingsComponent} from './track-meetings/track-meetings.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CheckboxButtonsComponent } from './checkbox-buttons/checkbox-buttons.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LandingComponent,
    TrackMeetingsComponent,
    CheckboxButtonsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
  ],
  providers: []
})
export class AppModule {
}
