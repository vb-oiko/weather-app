import { Component, OnInit } from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { NgZone } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss'],
  providers: [WeatherForecastService]
})
export class WorkplaceComponent implements OnInit {

  curWeather: IWeather;
  forecast: IWeather[];
  cityFound: boolean = false;

  constructor( 
    private _wfs: WeatherForecastService,
    private _ngzone: NgZone
  ) { }

  ngOnInit() {
    this.getCityByGeoPosition();
  }
  
  getWeatherByCityName (cityName: string) {
    this.cityFound = false;

    this._wfs.getCurrentWeather(cityName).subscribe(
      weather => {
        this.curWeather = weather;
        this.cityFound = true;
      },
      error => {
        console.log(error);
        this.curWeather = undefined;
      }
    );

    this._wfs.getWeatherForecast(cityName).subscribe(
      forecast => this.forecast = forecast,
      error => {
        console.log(error);
        this.forecast = undefined;
      }
    );
  };


  getCityByGeoPosition() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        var geocoder = new google.maps.Geocoder;
        var self = this;

        geocoder.geocode({
          'location': {lat: position.coords.latitude, lng: position.coords.longitude }}, 
          function(results, status) {
            let city:string;
            let country:string;

            if (status == google.maps.GeocoderStatus.OK) {
              
              var components = results[0]['address_components'];
              
              for(let i=0; i<components.length;i++) {
                if ( components[i]['types'][1]=='political') {
                  if(components[i]['types'][0]=='locality') {city = components[i]['short_name']}
                  if(components[i]['types'][0]=='country') {country = components[i]['short_name']}
                  
                }
              }

              self._ngzone.run(()=>{
                self.getWeatherByCityName(city + ', ' + country);
              });
            };

        });

      });
    };
  };
}