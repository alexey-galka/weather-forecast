import {Component, OnInit} from '@angular/core';
import {CityCardComponent} from "./city-card/city-card.component";
import {WeatherService} from "../../services/weather.service";
import {NgForOf} from "@angular/common";
import {WeatherDataInterface} from "../../interfaces/weather-data.interface";
import {SortingService} from "../../services/sorting.service";

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
export class GeneralListComponent implements OnInit {
  public cities: Array<WeatherDataInterface> = [];

  constructor(private weatherService: WeatherService, private sortingService: SortingService) {}


  ngOnInit(): void {
    this.weatherService.getCityName().subscribe((city: string) => {
      if (city) {
        this.weatherService.getWeather().subscribe({
          next: (weather: WeatherDataInterface) => this.cities.push(weather)
        });
      }
    })

    this.sortingService.getSorting().subscribe((status: boolean) => {
      if (status) {
        this.cities.sort((a, b) => a.location.name.localeCompare(b.location.name))
        console.log(this.cities)
      } else {
        this.cities.sort((a, b) => b.location.name.localeCompare(a.location.name));
        console.log(this.cities)
      }
    });
  }


}
