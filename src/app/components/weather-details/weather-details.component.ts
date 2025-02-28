import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { Weather } from '../../model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-details',
  standalone: false,
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent implements OnInit {

  city: string = ''
  weather!: Weather;
  apiKey = environment.apiKey

  constructor(private weatherSvc: WeatherService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('city') || 'Unknown City'; // Get city from URL
    this.fetchWeather(this.city);
  }

  fetchWeather(city: string) {
    this.weatherSvc.getWeather(city, this.apiKey)
      .then(result => {
        this.weather = result;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        // Optionally handle the error in UI
      });
  }

  backToHome() {
      this.router.navigate(['/'])
    }
}
