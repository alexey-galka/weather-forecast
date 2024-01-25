import { Component } from '@angular/core';
import {FavoriteCardComponent} from "./favorite-card/favorite-card.component";
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {WeatherDataInterface} from "../../interfaces/weather-data.interface";

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [
    FavoriteCardComponent,
    CdkDropList
  ],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss'
})
export class FavoriteListComponent {
  public favoriteCities: Array<WeatherDataInterface> = [];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.favoriteCities, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }

  }
}
