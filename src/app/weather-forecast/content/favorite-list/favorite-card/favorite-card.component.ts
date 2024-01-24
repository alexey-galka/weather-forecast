import { Component } from '@angular/core';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";

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

}
