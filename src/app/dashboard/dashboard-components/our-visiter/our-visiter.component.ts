import { Component, ViewChild } from "@angular/core";
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from "ng-apexcharts";

export interface VisitorChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  stroke: any;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
}

@Component({
  selector: "app-our-visiter",
  templateUrl: "./our-visiter.component.html"
})
export class OurVisiterComponent {
  @ViewChild("visitor-chart") chart2: ChartComponent = Object.create(null);
  public VisitorChartOptions: Partial<VisitorChartOptions>;

  constructor() {
    this.VisitorChartOptions = {
      series: [45, 15, 27],
      chart: {
        type: "donut",
        fontFamily: "Poppins,sans-serif",
        height: 253,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total:{
                show :true
              },
            },

            size: "60px",
            
          },
          
        },
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: true,
        // formatter: function (val) {
        //   return val + "%"
        // },
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      // labels: ["Transport", "Lifestyle", "Living", "Other"],
      // colors: ["#1e88e5", "#26c6da", "#745af2","#eceff1"],
      labels: ["Transport", "Lifestyle", "Living"],
      colors: ["#1e88e5", "#26c6da","#745af2"],
      responsive: [
        {
          breakpoint: 767,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {}
}
