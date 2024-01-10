import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherDataInterface} from "../interfaces/weather-data.interface";

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  private key: string = '5c00b24063544013ad565506241001';

  constructor(private http: HttpClient) {}

  getWeather(city: string = 'London'): Observable<Object> {
    const url: string = `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${city}`;
    return this.http.get(url);
  }
}
