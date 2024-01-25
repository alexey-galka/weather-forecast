import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {WeatherDataInterface} from "../interfaces/weather-data.interface";

@Injectable({
  providedIn: 'root',
})

export class DataSharingService {
  // Moving from general to favorite
  private favoriteCitiesSubject: BehaviorSubject<WeatherDataInterface[]> = new BehaviorSubject<WeatherDataInterface[]>([]);
  favoriteCities$: Observable<WeatherDataInterface[]> = this.favoriteCitiesSubject.asObservable();

  // Moving from favorite to general
  private generalCitiesSubject: BehaviorSubject<WeatherDataInterface[]> = new BehaviorSubject<WeatherDataInterface[]>([]);
  generalCities$: Observable<WeatherDataInterface[]> = this.generalCitiesSubject.asObservable();

  addToFavoriteCities(city: WeatherDataInterface): void {
    const currentCities: WeatherDataInterface[] = this.favoriteCitiesSubject.value;

    if (!currentCities.some((c: WeatherDataInterface): boolean => c.location.name === city.location.name)) {
      this.favoriteCitiesSubject.next([...currentCities, city])
    }
  }

  removeFromFavoriteCities(city: WeatherDataInterface): void {
    const currentCities: WeatherDataInterface[] = this.favoriteCitiesSubject.value;
    const updatedCities: WeatherDataInterface[] = currentCities.filter((c: WeatherDataInterface): boolean => c.location.name !== city.location.name);
    this.favoriteCitiesSubject.next(updatedCities);
  }

  addToGeneralCities(city: WeatherDataInterface): void {
    const currentCities: WeatherDataInterface[] = this.generalCitiesSubject.value;

    if (!currentCities.some((c: WeatherDataInterface): boolean => c.location.name === city.location.name)) {
      this.generalCitiesSubject.next([...currentCities, city]);
    }
  }
}
