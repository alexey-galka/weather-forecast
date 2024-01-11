import {Component, Input} from '@angular/core';
import {WeatherDataInterface} from "../../../interfaces/weather-data.interface";

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.scss'
})
export class CityCardComponent {
  @Input() weatherData!: WeatherDataInterface;

}
