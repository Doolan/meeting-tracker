import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-calender',
  templateUrl: './google-calender.component.html',
  styleUrls: ['./google-calender.component.scss']
})
export class GoogleCalenderComponent implements OnInit {

  CLIENT_ID = '183384183390-fonofmfflmv6h39fsla01e8a7msc10mm.apps.googleusercontent.com';
  API_KEY = 'AIzaSyAf740oZlPd_FCc8wiBVYnSAAV72FI7kgo';

  // Array of API discovery doc URLs for APIs used by the quickstart
  private DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  private SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

  constructor() { }

  ngOnInit() {
  }
  //
  // function initClient() {
  //   gapi.client.init({
  //     apiKey: API_KEY,
  //     clientId: CLIENT_ID,
  //     discoveryDocs: DISCOVERY_DOCS,
  //     scope: SCOPES
  //   }).then(function () {
  //     // Listen for sign-in state changes.
  //     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
  //
  //     // Handle the initial sign-in state.
  //     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  //     authorizeButton.onclick = handleAuthClick;
  //     signoutButton.onclick = handleSignoutClick;
  //   });
  // }


}
