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
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          suggestedMax: 8
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

  public barChartData: any[] = [
    {data: [0.5, 0.25, 0.75, 0, 0.75], label: 'Meeting Preparation'},
    {data: [1, 1, 1.5, 0.5, 3], label: 'Meetings'}
  ];

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

  // public randomize():void {
  //   // Only Change 3 values
  //   let data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   let clone = JSON.parse(JSON.stringify(this.barChartData));
  //   clone[0].data = data;
  //   this.barChartData = clone;
  //   /**
  //    * (My guess), for Angular to recognize the change in the dataset
  //    * it has to change the dataset variable directly,
  //    * so one way around it, is to clone the data, change it and then
  //    * assign it;
  //    */
  // }
}
