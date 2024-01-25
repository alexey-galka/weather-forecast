import { Component, AfterViewInit } from '@angular/core';
import { ChartService } from "../services/chart.service";

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  constructor(private chartService: ChartService) {}

  ngAfterViewInit(): void {
    this.chartService.initializeMap('map');
  }
}
