import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.renderCharts()

  }


  renderCharts() {


    // REMOVE TIMEOUT AFTER ADDING DATA
    setTimeout(() => {
      this.renderChart1()
      this.renderChart2()
    }, 1000)
  }


  renderChart1() {
    // chart 1


    new Chart('chart-bars', {
      type: "bar",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Sales",

            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "#fff",
            data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {

            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        scales: {
          y: {
            ticks: {
              color: '#fff'
            },
            grid: {

              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },


          },
          x: {
            grid: {

              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  }


  // interface IEmployee {

  //   Name: string;
  //   Tech: string;
  //   Id: number;
  //   Price: number;

  // }


  items: Array<any> = [
    {
      Name: "Dashboard",
      Tech: "React JS",
      Id: 9845745,
      Price: 123
    },
    {
      Name: "Dashboard",
      Tech: "Angular JS",
      Id: 9843745,
      Price: 149
    },
    {
      Name: "Dashboard",
      Tech: "Vue JS",
      Id: 9845645,
      Price: 153
    },

  ];

  headers: Array<string> = ['Project Name', 'technology', 'ID', 'Price'];




  renderChart2() {
    // chart 2

    var ctx2 = <CanvasRenderingContext2D>(<HTMLCanvasElement>document.getElementById("chart-line")).getContext("2d");

    var gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(203,12,159,0.2)");
    gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke1.addColorStop(0, "rgba(203,12,159,0)"); //purple colors

    var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, "rgba(20,23,39,0.2)");
    gradientStroke2.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke2.addColorStop(0, "rgba(20,23,39,0)"); //purple colors

    new Chart('chart-line', {
      type: "line",

      data: {

        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Mobile apps",
            tension: 0.4,

            pointRadius: 0,
            borderColor: "#cb0c9f",
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],


          },
          {
            label: "Websites",
            tension: 0.4,

            pointRadius: 0,
            borderColor: "#3A416F",
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],

          },
        ],
      },
      options: {

        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {

              display: true,
              drawOnChartArea: true,
              drawTicks: false,

            },
            ticks: {
              display: true,
              padding: 10,
              color: "#b2b9bf",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {

              display: false,
              drawOnChartArea: false,
              drawTicks: false,

            },
            ticks: {
              display: true,
              color: "#b2b9bf",
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });

    // end chart 2




  }


}
