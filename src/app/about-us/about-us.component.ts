import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  imagen: string;
}
export const image = [
  { "image": "crib-1" }
]
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {
  longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  imagenO = "https://home-of-logistics.com/wp-content/uploads/2021/08/companies-1-1024x520.png";
  imagenB="https://www.jll.com.br/images/new-article-template/jll-the-road-ahead-for-the-supply-chain-and-logistics-sector-in-vietnam-desktop-1280x448.jpg";
  tiles: Tile[] = [
    { text: this.longText, cols: 3, rows: 2, color:'#add2f8', imagen:"" },
    { text: '', cols: 1, rows: 2, color: '#2C3E50', imagen: this.imagenO },
    { text: '', cols: 1, rows: 3, color: '#2C3E50', imagen: this.imagenB },
    { text: this.longText, cols: 3, rows: 3, color:'#add2f8', imagen:"" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

