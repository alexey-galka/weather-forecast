import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

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
  isSorted: boolean = true;

  onTurnSorting(value: boolean): void {
    this.isSorted = value;
  }
}
