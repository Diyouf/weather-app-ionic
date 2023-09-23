import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  todayDay = new Date()
  weatherTemp : any
  weatherDetails! : any
  icon :any
  cityName : string = ''
  loading = false

  private  readonly apiUrl = environment.API_URL
  private  readonly apiKey = environment.API_KEY

  constructor(public  httpClient : HttpClient) {
    
  }
  ngOnInit(): void {
    // this.loadData()
  }
  
  loadData(){
    this.httpClient.get(`${this.apiUrl}?q=${this.cityName}&appid=${this.apiKey}`).subscribe( results => {
      this.weatherDetails = results
    this.icon = "https://openweathermap.org/img/wn/" + this.weatherDetails.weather[0].icon + "@4x.png"
    }
    )
  }


}
