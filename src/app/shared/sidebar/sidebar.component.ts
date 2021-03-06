import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Options } from '../../interfaces/options';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  options: Options[] = [{
    icon: 'polymer',
    title: 'App Engine',
    'page': 'home'
  }, {
    icon: 'settings',
    title: 'Settings',
    page: 'settings'
  }];
  constructor() { }

  ngOnInit() {
  }

}
