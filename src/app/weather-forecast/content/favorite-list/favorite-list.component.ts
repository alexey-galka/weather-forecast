import { Component } from '@angular/core';
import {FavoriteCardComponent} from "./favorite-card/favorite-card.component";

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [
    FavoriteCardComponent
  ],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss'
})
export class FavoriteListComponent {

}
