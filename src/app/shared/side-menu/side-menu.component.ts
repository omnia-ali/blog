import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() sideNavToggel: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
