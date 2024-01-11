import {Component, OnInit} from '@angular/core';
import {CityCardComponent} from "./city-card/city-card.component";
import {WeatherService} from "../../services/weather.service";
import {NgForOf} from "@angular/common";
import {WeatherDataInterface} from "../../interfaces/weather-data.interface";

@Component({
  selector: 'app-general-list',
  standalone: true,
  imports: [
    CityCardComponent,
    NgForOf
  ],
  templateUrl: './general-list.component.html',
  styleUrl: './general-list.component.scss'
})
export class GeneralListComponent  implements OnInit {
  public cities: Array<WeatherDataInterface> = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (weather: WeatherDataInterface) => this.cities.push(weather),
    });
  }
}
