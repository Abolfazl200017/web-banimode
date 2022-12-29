import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination, Autoplay , Navigation]);
@Component({
  selector: 'app-slider',
  templateUrl:'./slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
