import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adby-city',
  templateUrl: './adby-city.component.html',
  styleUrls: ['./adby-city.component.scss']
})
export class AdbyCityComponent implements OnInit {

  constructor() { }
  cities = [
    { cityName: "london", count: 96 },
    { cityName: "anchorage", count: 96 },
    { cityName: "prescott", count: 96 },
    { cityName: "forrest city", count: 96 },
    { cityName: "arcadia", count: 96 },
    { cityName: "huntington beach", count: 96 },
    { cityName: "new york", count: 96 },
    { cityName: "fairbanks", count: 96 },
    { cityName: "arkadelphia", count: 96 },
    { cityName: "hot springs", count: 96 },
    { cityName: "barstow", count: 96 },
    { cityName: "laguna beach", count: 96 },


    { cityName: "london", count: 96 },
    { cityName: "anchorage", count: 96 },
    { cityName: "prescott", count: 96 },
    { cityName: "forrest city", count: 96 },
    { cityName: "arcadia", count: 96 },
    { cityName: "huntington beach", count: 96 },
    { cityName: "new york", count: 96 },
    { cityName: "fairbanks", count: 96 },
    { cityName: "arkadelphia", count: 96 },
    { cityName: "hot springs", count: 96 },
    { cityName: "barstow", count: 96 },
    { cityName: "laguna beach", count: 96 },


  ]
  ngOnInit(): void {
  }

}
