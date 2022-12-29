import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination, Autoplay , Navigation]);

export interface ISlide{
  img:string,
  prePrice:number,
  price:number,
  brand:string,
  name:string,
  sizes:string[]
}
@Component({
  selector: 'app-slider',
  templateUrl:'./slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit {
  slides:ISlide[]=[
    {
      img:'p-1.png',
      prePrice:7999000,
      price:6999000,
      brand:"Jeanswest",
      name:'پافر زنانه جین وست',
      sizes:['XL','L','M']
    },
    {
      img:'p-2.png',
      prePrice:9999000,
      price:5999000,
      brand:"Nike",
      name:'پافر مردانه جین وست',
      sizes:['XL','L']
    },
    {
      img:'p-7.png',
      prePrice:7500000,
      price:6999000,
      brand:"addidas",
      name:'پالتو جین وست',
      sizes:['2XL','XL','L','M']
    },
    {
      img:'p-4.png',
      prePrice:7999000,
      price:6999000,
      brand:"Jeanswest",
      name:'پافر زنانه جین وست',
      sizes:['XL','L','M']
    },
    {
      img:'p-6.png',
      prePrice:7999000,
      price:6999000,
      brand:"Jeanswest",
      name:'پافر زنانه جین وست',
      sizes:['XL','L','M']
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getOffPercent(item:ISlide){
    return(Math.round((item.prePrice-item.price)/item.prePrice*100))
  }
  // getPrice(price:number):string{
  //   let p = price.toString()
  //   let l = p.length
  //   if(l>6){
  //     return(`${this.transform(p.substring(0,l-6))},${this.transform(p.substring(l-6 , l-3))},${this.transform(p.substring(l-3 , l))}`)
  //   }else if(l>3){
  //     return(`${this.transform(p.substring(0 , l-3))},${this.transform(p.substring(l-3 , l))}`)
  //   }
  //   return("")
  // }
  // transform(str: string): any {
  //   return str.replaceAll(/0/g,'٠').replaceAll(/1/g,'١').replaceAll(/2/g,'٢').replaceAll(/3/g,'٣').replaceAll(/4/g,'۴')
  //   .replaceAll(/5/g,'۵').replaceAll(/6/g,'۶').replaceAll(/7/g,'۷').replaceAll(/8/g,'٨').replaceAll(/9/g,'٩')
  //   .replaceAll(/۰/g,'٠').replaceAll(/۱/g,'١').replaceAll(/۲/g,'٢').replaceAll(/۳/g,'٣').replaceAll(/۴/g,'۴')
  //   .replaceAll(/۵/g,'۵').replaceAll(/۶/g,'۶').replaceAll(/۷/g,'٧').replaceAll(/۸/g,'٨').replaceAll(/۹/g,'٩');   
  // }
}
