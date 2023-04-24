import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {
    this.chartOptions = {
      // give chart configuration data from highcharts
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Average Student Admission, (2022-2023)',
        align: 'center'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
      },
      credits: {
        enabled: false
    },
    series: [{
        type: 'pie',
        name: 'Count',
        data: [
          {
            name: 'MEARN',
            y: 30,
            sliced: true,
            selected: true
        },
            ['PYTHON', 18],
            ['BIG DATA','10'],
            ['TESTING', 9],
            ['FLUTTER', 8],
            ['BIG DATA', 15],
          ['.NET', 8],
          ['JAVA SPRING', 5],
          ['AI', 6],
          ['ML',9]
        ]
    }]
    }
  }
}
