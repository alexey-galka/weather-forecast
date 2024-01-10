import {Component, OnInit} from '@angular/core';
import {CityCardComponent} from "./city-card/city-card.component";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-general-list',
  standalone: true,
  imports: [
    CityCardComponent
  ],
  templateUrl: './general-list.component.html',
  styleUrl: './general-list.component.scss'
})
export class GeneralListComponent  implements OnInit {
  public cities: Array<Object> = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe((weather: Object) => this.cities.push(weather));
  }
}
