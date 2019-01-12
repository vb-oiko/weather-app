export interface IWeather {
    cityAndCountry: string;
    date: number;
    condDescr: string;
    temp: number;
    pressure: number;
    humidity: number;
    windSpeed: number;
}

export interface IState {
    curCity: string;
    starredCities: string[];
    cityFound: boolean;
}