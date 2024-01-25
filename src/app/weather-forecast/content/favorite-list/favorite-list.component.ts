import { Component } from '@angular/core';
import {FavoriteCardComponent} from "./favorite-card/favorite-card.component";
import {CdkDrag, CdkDragDrop, CdkDropList} from "@angular/cdk/drag-drop";
import {WeatherDataInterface} from "../../interfaces/weather-data.interface";
import {DataSharingService} from "../../services/data-sharing.service";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [
    FavoriteCardComponent,
    CdkDropList,
    AsyncPipe,
    CdkDrag,
    NgForOf
  ],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss'
})
export class FavoriteListComponent {
  favoriteCities$: Observable<WeatherDataInterface[]> = this.dataSharingService.favoriteCities$;

  constructor(private dataSharingService: DataSharingService) {}

  drop(event: CdkDragDrop<string[]>): void {
    const draggedCity = event.item.data;
    this.dataSharingService.removeFromFavoriteCities(draggedCity);
    this.dataSharingService.addToGeneralCities(draggedCity);
  }

}
