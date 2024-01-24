import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {WeatherService} from "../../services/weather.service";
import {SortingService} from "../../services/sorting.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  public isSorted: boolean = true;
  public cityName: string = '';

  constructor(private weatherService: WeatherService, private sortingService: SortingService) {}

  public onSearchCity(): void {
    this.weatherService.setCityName(this.cityName);
    this.cityName = '';
  }

  onTurnSorting(value: boolean): void {
    this.isSorted = value;
    this.sortingService.setSorting(this.isSorted);
  }
}
