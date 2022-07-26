import { Injectable } from '@angular/core';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private images: Image[] = [
    {
      image: '"../../../../assets/imgs/bg1.png"',
    },
    {
      image: '"../../../../assets/imgs/bg2.png"',
    },
    {
      image: '"../../../../assets/imgs/bg3.png"',
    },
    {
      image: '"../../../../assets/imgs/bg4.png"',
    },
    {
      image: '"../../../../assets/imgs/bg5.png"',
    },
  ];

  getImages() {
    return this.images.slice();
  }
}
