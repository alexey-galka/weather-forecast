import { Injectable } from "@angular/core";
import * as L from "leaflet";

@Injectable({
  providedIn: 'root',
})

export class ChartService {
  private map: L.Map | undefined;

  initializeMap(mapElementId: string): void {
    this.map = L.map(mapElementId).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }
}
