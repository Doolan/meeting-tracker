import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drill-down',
  templateUrl: './drill-down.component.html',
  styleUrls: ['./drill-down.component.scss']
})
export class DrillDownComponent implements OnInit {

  public meetings = [
    {
      title: 'Dev Planning',
      date: {year: 2018, month: 7, day: 30},
      project: 'Internal',
      duration: 90,
      rating: 9,
      preparationTime: 10,
      description: '',
      tags: [],
    },
    {
      title: 'Stand Up',
      date: {year: 2018, month: 7, day: 31},
      project: 'Telecom Communications',
      duration: 30,
      rating: 8,
      preparationTime: 5,
      description: '',
      tags: [],
    },
    {
      title: 'Stand Up',
      date: {year: 2018, month: 8, day: 1},
      project: 'Telecom Communications',
      duration: 30,
      rating: 8,
      preparationTime: 5,
      description: '',
      tags: [],
    },
    {
      title: 'Driven Planning',
      date: {year: 2018, month: 8, day: 1},
      project: 'Internal',
      duration: 120,
      rating: 10,
      preparationTime: 120,
      description: '',
      tags: [],
    },
    {
      title: 'Stand Up',
      date: {year: 2018, month: 8, day: 3},
      project: 'Telecom Communications',
      duration: 30,
      rating: 3,
      preparationTime: 5,
      description: '',
      tags: [],
    },
    {
      title: 'Playback and Retrospective',
      date: {year: 2018, month: 8, day: 3},
      project: 'Internal',
      duration: 150,
      rating: 3,
      preparationTime: 10,
      description: '',
      tags: [],
    },
  ];
  public doughnutChartLabels: string[] = ['Meeting Time', 'Preparation Time'];
  public doughnutBilliableChartData: number[] = [90, 15];
  public doughnutInternalChartData: number[] = [360, 140];
  public doughnutChartType = 'doughnut';
  public colors = [
    {
      backgroundColor: [ '#F47920', '#42C1C6']
     // borderColor: '#42C1C6',
    }];

  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: ['#F47920', '#42C1C6'],
    legend: {
      display: true,
      position: 'bottom',
    },
    scales: {
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Time in Hours',
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Week Day'
        }
      }]
    }
  };
  public lineColors = [
    {
      backgroundColor: 'rgba(255, 138, 53,0.60)',
      borderColor: '#F47920'
    },
    {
      backgroundColor: 'rgba(66, 193, 198,0.5)',
      borderColor: '#2abcc1',
      pointBackgroundColor: '#2abcc1',
    }
  ];

  public lineChartData: Array<any> = [
    {
      data: [100, 0, 240, 0, 150],
      label: 'Meeting Preparation Time'
    },
    {
      data: [0, 35, 35, 35, 0],
      label: 'In Meeting Time'
    }

  ];
  public lineChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  public lineChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

}
