import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  images = ['coca-cola.jpg', 'airwaves.jpg','bruno.jpg', 'hm.jpg', 'nutella.jpeg', 'sber.png', 'kfc.jpg', 'smoki.png'];
  currentImage: any;
  private iterator:number = 0;
  private interval;

  constructor() { }

  ngOnInit() {
    this.setImage();
    this.interval = setInterval(this.setImage, 8000);
  }

  private setImage = () => {
    this.currentImage = this.images[this.iterator];
    let nextIterator = (this.iterator + 1) % this.images.length;
    this.iterator = nextIterator;
  }

}
