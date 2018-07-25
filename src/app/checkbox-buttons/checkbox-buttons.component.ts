import {Component, OnInit} from '@angular/core';
import {CheckboxButton} from '../checkbox-button';

@Component({
  selector: 'app-checkbox-buttons',
  templateUrl: './checkbox-buttons.component.html',
  styleUrls: ['./checkbox-buttons.component.scss']
})
export class CheckboxButtonsComponent implements OnInit {

  buttons: CheckboxButton[];

  constructor() {
  }

  ngOnInit() {
    this.buttons = [
      {
        id: 1,
        name: 'Billable',
        selected: false
      },
      {
        id: 2,
        name: 'Reoccurring',
        selected: false
      },
      {
        id: 3,
        name: 'Planned',
        selected: false
      },
      {
        id: 4,
        name: 'Required',
        selected: false
      }
    ];
  }

  onSelect(button: CheckboxButton) {
    button.selected = !button.selected;
  }
}
