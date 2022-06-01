import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageSrc = '';
  messageText = '';
  timer:any;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  subTitle1 = "Solutions for your business";
  subTitle2 = "Exclusive services";
  subTitle3 = "Quality and trust";
  slides = [
    { img: "https://www.cet-logistics.com/public/cms/gal/1/files/home-slider2.jpg", text: this.subTitle1 },
    { img: "https://pbs.twimg.com/media/FBFcrCoWUAQv-yN?format=jpg&name=4096x4096", text: this.subTitle2 },
    { img: "https://media-exp1.licdn.com/dms/image/C4E1BAQG5Flr6Pi3Z6Q/company-background_10000/0/1553174231232?e=2147483647&v=beta&t=Tw-ezULS3bIutwEE3-ZINEd6p4ZVhgP1MEP7jHMXExE", text: this.subTitle3 },

  ];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };

  currentPosition = 0;

  nextPicture(e?: any) {
    if (this.currentPosition >= this.slides.length - 1) {
      this.currentPosition = 0;
    } else {
      this.currentPosition++;
    }
    this.renderImage();
  }
  // automaticNextPicture() {
  //   if (this.currentPosition >= this.slides.length - 1) {
  //     this.currentPosition = 0;
  //   } else {
  //     this.currentPosition++;
  //   }
  //   this.renderImage();
  // }
  backPicture(e: any) {
    if (this.currentPosition <= 0) {
      this.currentPosition = this.slides.length - 1;
    } else {
      this.currentPosition--;
    }
    this.renderImage();

  }
  renderImage() {
    this.imageSrc = this.slides[this.currentPosition].img;
    this.messageText = this.slides[this.currentPosition].text;
  }

  constructor() { }

  ngOnInit(): void {
    this.renderImage();
    this.timer = setInterval(() => this.nextPicture(), 3000);
  }

}
