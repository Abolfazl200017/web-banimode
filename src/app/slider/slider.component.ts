import { Component, OnInit } from '@angular/core';
import SwiperCore, { FreeMode, Pagination, SwiperOptions } from 'swiper';
import {SwiperComponent} from 'swiper/angular'

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-slider',
  templateUrl:'./slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
