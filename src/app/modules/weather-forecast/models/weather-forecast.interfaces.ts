export interface IWeather {
    cityAndCountry: string;
    date: number;
    condDescr: string;
    temp: number;
    pressure: number;
    humidity: number;
    windSpeed: number;
}

export interface User {
    uid: string;
    email: string;
  }