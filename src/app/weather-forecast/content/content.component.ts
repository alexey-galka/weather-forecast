import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {GeneralListComponent} from "./general-list/general-list.component";
import {FavoriteListComponent} from "./favorite-list/favorite-list.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    HeaderComponent,
    GeneralListComponent,
    FavoriteListComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
