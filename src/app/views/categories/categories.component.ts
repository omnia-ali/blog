import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  featuredData = [
    { id: 1, name: "vehicles", imgpath: "assets/imgs/categories/c1.png",count:200 },
    { id: 2, name: "Mobiles", imgpath: "assets/imgs/categories/c8.png", count:437 },
    { id: 3, name: "Electronics", imgpath: "assets/imgs/categories/c4.png", count:898 },
    { id: 4, name: "Furniture", imgpath: "assets/imgs/categories/c3.png", count:989 },
    { id: 4, name: "Jobs", imgpath: "assets/imgs/categories/c7.png", count:653},
    { id: 4, name: "Real Estate", imgpath: "assets/imgs/categories/c5.png",count:268 },

    { id: 1, name: "vehicles", imgpath: "assets/imgs/categories/c1.png",count:200 },
    { id: 2, name: "Mobiles", imgpath: "assets/imgs/categories/c8.png", count:437 },
    { id: 3, name: "Electronics", imgpath: "assets/imgs/categories/c4.png", count:898 },
    { id: 4, name: "Furniture", imgpath: "assets/imgs/categories/c3.png", count:989 },
    { id: 4, name: "Jobs", imgpath: "assets/imgs/categories/c7.png", count:653},
    { id: 4, name: "Real Estate", imgpath: "assets/imgs/categories/c5.png",count:268 }
  ];
  ngOnInit(): void {
  }

}
