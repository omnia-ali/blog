import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor() { }
  featuredData = [
    { id: 1, name: "canon sx powershot A Great DSlR", imgpath: "assets/imgs/Featured/F1.jpg", price: 206.90, time: Date.now() },
    { id: 2, name: "Samsung Galaxy phone", imgpath: "assets/imgs/Featured/F4.jpg", price: 206.90, time: Date.now() },
    { id: 3, name: "BMW f20 1 series hatchback 5-door", imgpath: "assets/imgs/Featured/F3.jpg", price: 206.90, time: Date.now() },
    { id: 4, name: "labrador male for sale", imgpath: "assets/imgs/Featured/F5.jpg", price: 206.90, time: Date.now() }
  ];
  ngOnInit(): void {
  }

}
