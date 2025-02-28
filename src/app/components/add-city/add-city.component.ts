import { Component } from '@angular/core';

@Component({
  selector: 'app-add-city',
  standalone: false,
  templateUrl: './add-city.component.html',
  styleUrl: './add-city.component.css'
})
export class AddCityComponent {

cityName: string = ''
cityList: string[] = ['Singapore','Beijing','Sydney','Bangkok','Kuala Lumpur']

addToList() {
  if(this.cityName.trim()){
    this.cityList.push(this.cityName)
    this.cityName = ''
  }
}

}
