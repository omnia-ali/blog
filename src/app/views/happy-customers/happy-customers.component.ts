import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-happy-customers',
  templateUrl: './happy-customers.component.html',
  styleUrls: ['./happy-customers.component.scss']
})
export class HappyCustomersComponent implements OnInit {

  constructor() { }
customers=[
  {name:"Gerry Miller tr",title:"tutor",locationCountry:"united kingdom",locationCity:"london",imgpath:"/assets/imgs/happy customers/customer1.jpg",desc:"",},
  {name:"dived jackson",title:"student",locationCountry:"united kingdom",locationCity:"london",imgpath:"/assets/imgs/happy customers/customer2.jpg",desc:"",},
  //{name:"",title:"",location:"",imgpath:"",desc:"",},
]
  ngOnInit(): void {
  }

}
