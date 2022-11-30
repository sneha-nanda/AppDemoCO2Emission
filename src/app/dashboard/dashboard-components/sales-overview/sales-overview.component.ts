import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid
} from "ng-apexcharts";
import { LocalService } from "src/app/services/local-service";
import { StorageKeys } from "src/app/data/default-data";

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
}

@Component({
  selector: "app-sales-overview",
  templateUrl: "./sales-overview.component.html"
})
export class SalesOverviewComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<ChartOptions>;

  constructor(private localStore: LocalService) {
    const co2TotalConsumtion = localStore.getData(
      StorageKeys.CO2IndividualTotalConsumtion
    );
    const co2Value = parseInt(
      co2TotalConsumtion != null ? co2TotalConsumtion : "0"
    );

    this.chartOptions = {
      series: [
        {
          name: "Your CO2 Consumption",
          data: [co2Value]
        },
        {
          name: "United Kingdom",
          data: [76]
        },
        {
          name: "Organisation",
          data: [34]
        }
      ],
      chart: {
        type: "bar",
        fontFamily: "Poppins,sans-serif",
        height: 320
      },
      grid: {
        borderColor: "rgba(0,0,0,.2)",
        strokeDashArray: 3
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: ["Amount of CO2 Consumption in Kgs"]
      },

      legend: {
        show: false
      },
      fill: {
        colors: ["#355E3B", "#00A36C", "#0BDA51"],
        opacity: 1
      },
      tooltip: {
        theme: "dark"
      }
    };
  }

  ngOnInit(): void {}
}
