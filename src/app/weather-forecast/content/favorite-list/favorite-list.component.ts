import { Component } from '@angular/core';
import {FavoriteCardComponent} from "./favorite-card/favorite-card.component";
import {CdkDropList} from "@angular/cdk/drag-drop";

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

}
