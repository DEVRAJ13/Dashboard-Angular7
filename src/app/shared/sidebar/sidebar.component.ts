import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  options = [{
    "icon":"polymer",
    "title": "App Engine",
    "page":"home"
  },{
    "icon":"settings",
    "title":"Settings",
    "page":"settings"
  }]
  constructor() { }

  ngOnInit() {
  }

}
