import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination, Swiper, SwiperOptions,  } from 'swiper';

SwiperCore.use([Pagination, Autoplay , Navigation]);

@Component({
  selector: 'app-event',
  templateUrl:'./event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  slides:string[]=[
    'https://www.banimode.com/img/cms/011010/1672478140.jpg',
    'https://www.banimode.com/img/cms/011010/1672478164.jpg',
    'https://www.banimode.com/img/cms/011010/1672478190.jpg',
    'https://www.banimode.com/img/cms/011010/1672478214.jpg',
    'https://www.banimode.com/img/cms/011010/1672478198.jpg',
    'https://www.banimode.com/img/cms/011010/1672478205.jpg',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
