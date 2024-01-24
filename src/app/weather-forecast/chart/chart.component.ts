import { Component } from '@angular/core';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    LeafletModule,
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  
}
