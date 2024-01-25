import {Component, OnInit} from '@angular/core';
import {CityCardComponent} from "./city-card/city-card.component";
import {WeatherService} from "../../services/weather.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {WeatherDataInterface} from "../../interfaces/weather-data.interface";
import {SortingService} from "../../services/sorting.service";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {DataSharingService} from "../../services/data-sharing.service";
import {FavoriteCardComponent} from "../favorite-list/favorite-card/favorite-card.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-general-list',
  standalone: true,
  imports: [
    CityCardComponent,
    NgForOf,
    CdkDropList,
    CdkDrag,
    AsyncPipe,
    FavoriteCardComponent
  ],
  templateUrl: './general-list.component.html',
  styleUrl: './general-list.component.scss'
})
export class GeneralListComponent implements OnInit {
  public cities: Array<WeatherDataInterface> = [];
  generalCities$: Observable<WeatherDataInterface[]> = this.dataSharingService.generalCities$;

  constructor(private weatherService: WeatherService, private sortingService: SortingService, private dataSharingService: DataSharingService) {}

  drop(event: CdkDragDrop<string[]>): void {
    const draggedCity = event.item.data;
    this.cities.splice(event.previousIndex, 1);
    this.dataSharingService.addToFavoriteCities(draggedCity);
    moveItemInArray(this.cities, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.weatherService.getCityName().subscribe((city: string) => {
      if (city) {
        this.weatherService.getWeather().subscribe({
          next: (weather: WeatherDataInterface) => this.cities.push(weather)
        });
      }
    });

    this.sortingService.getSorting().subscribe((status: boolean) => {
      status
        ? this.cities.sort((a: WeatherDataInterface, b: WeatherDataInterface) => a.location.name.localeCompare(b.location.name))
        : this.cities.sort((a: WeatherDataInterface, b: WeatherDataInterface) => b.location.name.localeCompare(a.location.name));
    });
  }
}
