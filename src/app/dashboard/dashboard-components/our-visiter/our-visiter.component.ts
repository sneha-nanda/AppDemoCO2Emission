import { Component, ViewChild } from "@angular/core";
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";
import { LocalService } from "src/app/services/local-service";
import { StorageKeys } from "src/app/data/default-data";
import { CO2IndividualPerConsumption } from "src/app/services/data-mapper";

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

  constructor(private localStore: LocalService) {
    const co2Percentage = localStore.getData(
      StorageKeys.CO2IndividualPerConsumption
    );
    const co2PercentageData : CO2IndividualPerConsumption = co2Percentage !== null ? JSON.parse(co2Percentage) : { co2LivingPercentage: 0,
      co2TransportPercentage: 0,
      co2LifeStylePercentage: 0}
    this.VisitorChartOptions = {
      series: [Math.round(co2PercentageData.co2TransportPercentage), Math.round(co2PercentageData.co2LifeStylePercentage), Math.round(co2PercentageData.co2LivingPercentage)],
      chart: {
        type: "donut",
        fontFamily: "Poppins,sans-serif",
        height: 253
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true
              }
            },

            size: "60px"
          }
        }
      },
      tooltip: {
        fillSeriesColor: false
      },
      dataLabels: {
        enabled: true
        // formatter: function (val) {
        //   return val + "%"
        // },
      },
      stroke: {
        width: 0
      },
      legend: {
        show: false
      },
      // labels: ["Transport", "Lifestyle", "Living", "Other"],
      // colors: ["#1e88e5", "#26c6da", "#745af2","#eceff1"],
      labels: ["Transport", "Lifestyle", "Living"],
      colors: ["#355E3B", "#00A36C", "#0BDA51"],
      responsive: [
        {
          breakpoint: 767,
          options: {
            chart: {
              width: 200
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {}
}
