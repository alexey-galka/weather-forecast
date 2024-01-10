import { Component } from '@angular/core';
import {ContentComponent} from "./content/content.component";
import {ChartComponent} from "./chart/chart.component";

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [
    ContentComponent,
    ChartComponent,
  ],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss'
})
export class WeatherForecastComponent {

}
