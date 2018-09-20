import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: ['#F47920', '#42C1C6'],
    legend: {
      display: true,
      position: 'bottom',
    },
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Time in Hours',
        },
        ticks: {
          //suggestedMax: 8
        }
      }]
    }
  };
  public barChartLabels: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public colors = [
    {
      backgroundColor: '#42C1C6',
      borderColor: '#42C1C6',
    },
    {
      backgroundColor: '#F47920',
      borderColor: '#F47920',
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
          labelString: 'Week Start Date'
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
  public barChartData: any[] = [
    {data: [0.5, 0.25, 0.75, 0, 0.75], label: 'Meeting Preparation'},
    {data: [1, 1, 1.5, 0.5, 3], label: 'Meetings'}
  ];
  public lineChartData: Array<any> = [
    {
      data: [9.6, 9.3, 8, 10.1, 6, 7, 7.8, 8.8, 7.6, 8.5, 7, 0, 7.4, 6.0, 5.2, 6.4, 7],
      label: 'In Meeting Time'
    },
    {
      data: [3.7, 2.9, 3.3, 3.7, 2.5, 2.3, 3.10, 1.4, 2.4, 2.4, 2.2, 0, 2.5, 2.9, 2.4, 2.7],
      label: 'Meeting Preparation Time'
    }
  ];
  public lineChartLabels: Array<any> = ['4/16', '4/23', '4/30', '5/7', '5/14', '5/21', '5/28',
    '6/4', '6/11', '6/18', '6/25', '7/2', '7/9', '7/16', '7/23', '7/30'];
  public lineChartType = 'line';

  constructor() {
  }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
