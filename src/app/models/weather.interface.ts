export type WeatherType = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Clear' | 'Clouds';

export interface WeatherInterface {
  id: number;
  city: string;
  clouds: number;
  country: string;
  date: string;
  description: string;
  highestTemp: number;
  humidity: number;
  lowestTemp: number;
  main: WeatherType;
  sunrise: string;
  sunset: string;
  temp: number;
  wind: number;
  forecast: Forecast[]
}

export interface Forecast {
  clouds: {all: number}
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    grnd_level: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    temp_kf: number;
    sea_level: number;
    humidity: number;
  }
  pop: number;
  sys: {pod: string;}
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number
    main: string;
  }[]
  wind: {speed: number; deg: number; gust: number;}
}
