import { Component, inject, OnInit } from '@angular/core';
import { RouterLink,RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ThemeCssVariableService, ThemeCssVariablesType } from '../../../../core/services/theme-css-variable.service';

@Component({
  selector: 'app-risk',
  standalone: true,
  imports: [
    RouterModule,
    NgApexchartsModule
  ],
  templateUrl: './risk.component.html',
  styleUrl: './risk.component.scss'
})
export class RiskComponent implements OnInit {
  public donutChartOptions: any = {};
  public pieChartOptions: any = {};

  private themeCssVariableService = inject(ThemeCssVariableService);

  constructor() {}

  ngOnInit(): void {
    const themeCssVariables = this.themeCssVariableService.getThemeCssVariables();

    this.donutChartOptions = this.getDonutChartOptions(themeCssVariables);
    this.pieChartOptions = this.getPieChartOptions(themeCssVariables);
  }
    /**
   * Donut chart options
   */
  getDonutChartOptions(themeVariables: ThemeCssVariablesType) {
    return {
      series: [44, 55, 13, 33],
      chart: {
        height: 300,
        type: "donut",
        foreColor: themeVariables.secondary,
        toolbar: {
          show: false
        },
      },
      colors: [themeVariables.primary,themeVariables.warning,themeVariables.danger, themeVariables.info],
      stroke: {
        colors: ['rgba(0,0,0,0)']
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: 'center',
        fontFamily: themeVariables.fontFamily,
        itemMargin: {
          horizontal: 8,
          vertical: 0
        },
      },
      dataLabels: {
        enabled: false
      }
    }
  };



  /**
   * Pie chart options
   */
  getPieChartOptions(themeVariables: ThemeCssVariablesType) {
    return {
      series: [44, 55, 13, 33],
      chart: {
        height: 300,
        type: "pie",
        foreColor: themeVariables.secondary,
        toolbar: {
          show: false
        },
      },
      colors: [themeVariables.primary,themeVariables.warning,themeVariables.danger, themeVariables.info],
      stroke: {
        colors: ['rgba(0,0,0,0)']
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: 'center',
        fontFamily: themeVariables.fontFamily,
        itemMargin: {
          horizontal: 8,
          vertical: 0
        },
      },
      dataLabels: {
        enabled: false
      }
    }
  };
}
