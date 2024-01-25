import {Component, Input} from '@angular/core';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {WeatherDataInterface} from "../../../interfaces/weather-data.interface";

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList
  ],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.scss'
})
export class FavoriteCardComponent {
  @Input() weatherData!: WeatherDataInterface;
}
