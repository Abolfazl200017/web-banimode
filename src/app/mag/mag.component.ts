import { Component, OnInit } from '@angular/core';

export interface IMag{
  img:string,
  title:string
}
@Component({
  selector: 'app-mag',
  templateUrl:'./mag.component.html',
  styles: [
  ]
})
export class MagComponent implements OnInit {
  mags:IMag[]=[
    {
      img:'p-1.jpg',
      title:'شب یلدا جیست؟'
    },
    {
      img:'p-2.jpg',
      title:'دوشنبه سایبری یا سایبر ماندی چیست؟'
    },
    {
      img:'p-3.jpg',
      title:'لیست سیسمونی نوزاد پسر و دختر'
    },
    {
      img:'p-4.jpg',
      title:'مدل جوراب زمستانی'
    },
    {
      img:'p-5.jpg',
      title:'انواع کلاه زنانه'
    },
    {
      img:'p-6.jpg',
      title:'استایل مونوکروم چیست؟'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
