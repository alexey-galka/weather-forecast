import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {WeatherDataInterface} from "../interfaces/weather-data.interface";

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  private key: string = '5c00b24063544013ad565506241001';
  private cityName: string = '';
  public citySubject$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  public setCityName(name: string): string {
    this.cityName = name;
    this.citySubject$.next(this.cityName);
    return this.cityName;
  }

  public getCityName(): Observable<string> {
    return this.citySubject$.asObservable();
  }

  getWeather(): Observable<WeatherDataInterface> {
    const url: string = `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${this.cityName}`;
    return this.http.get<WeatherDataInterface>(url);
  }
}
