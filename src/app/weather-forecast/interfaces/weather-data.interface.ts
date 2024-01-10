export interface WeatherDataInterface {
  location: {
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: string,
  },
  current?: {
    temp_c: number,
    wind_kph: number,
    wind_degree: number,
    condition: {
      text: string,
    }
  }
}
