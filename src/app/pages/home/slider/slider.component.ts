import { Component, OnInit } from '@angular/core';
import { Image } from './image.model';
import { ImagesService } from './images.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  images: Image[] = [];
  actualImage: any;
  changeBackgroundCounter = 0;
  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.images = this.imagesService.getImages();
    this.actualImage = this.images[0].image;
    setInterval(() => {
      this.changeBackgroundCounter++;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
      this.actualImage = this.images[this.changeBackgroundCounter].image;
    }, 10000);
  }
}
