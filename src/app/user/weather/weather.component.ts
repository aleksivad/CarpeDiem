import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  currentDate = new Date();
  description = null;
  forecast =null;
  icon = null;
  currentTemp = null;
  minTemp = null;
  maxTemp = null;
  
  constructor(private http:HttpClient) {

   }

  ngOnInit() {
    this.http.get("http://api.openweathermap.org/data/2.5/weather?lang=sr&APPID=f700687ab19f7709bcc1b131392d63f1&q=Banja%20Luka")
      .subscribe((result:any) => {
        this.forecast = result.weather[0];
        this.description = this.forecast.description;
        this.icon = this.forecast.icon;
        this.currentTemp = result.main.temp - 273.15;
        this.minTemp = result.main.temp_min - 273.15;
        this.maxTemp = result.main.temp_max - 273.15;
      })

/*       this.http.get("http://openweathermap.org/img/wn/" + icon + "@2x.png")
      .subscribe((result:any) => {
        this.iconLink = result;
      }) */

      setInterval(() => {
        this.currentDate = new Date();
      }, 1000);
  }

}
