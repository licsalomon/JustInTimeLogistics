import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentYear = new Date().getFullYear();
  fabTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
}
