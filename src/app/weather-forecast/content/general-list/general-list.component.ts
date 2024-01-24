import {Component, OnInit} from '@angular/core';
import {CityCardComponent} from "./city-card/city-card.component";
import {WeatherService} from "../../services/weather.service";
import {NgForOf} from "@angular/common";
import {WeatherDataInterface} from "../../interfaces/weather-data.interface";
import {SortingService} from "../../services/sorting.service";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-general-list',
  standalone: true,
  imports: [
    CityCardComponent,
    NgForOf,
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './general-list.component.html',
  styleUrl: './general-list.component.scss'
})
export class GeneralListComponent implements OnInit {
  public cities: Array<WeatherDataInterface> = [];

  constructor(private weatherService: WeatherService, private sortingService: SortingService) {}

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.cities, event.previousIndex, event.currentIndex)
  }

  ngOnInit(): void {
    this.weatherService.getCityName().subscribe((city: string) => {
      if (city) {
        this.weatherService.getWeather().subscribe({
          next: (weather: WeatherDataInterface) => this.cities.push(weather)
        });
      }
    })

    this.sortingService.getSorting().subscribe((status: boolean) => {
      status
        ? this.cities.sort((a, b) => a.location.name.localeCompare(b.location.name))
        : this.cities.sort((a, b) => b.location.name.localeCompare(a.location.name));
    });
  }
}
