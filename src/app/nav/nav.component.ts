import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  links = ['', 'login', 'search', 'about-us'];
  titles = ['Home', 'Login', 'Search', 'About us'];
  activeLink = this.links[0];
  myColor: ThemePalette = 'primary';
}
