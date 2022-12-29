import { Component, OnInit } from '@angular/core';

export interface IActivities{
  img:string,
  title:string,
  description:string
}
@Component({
  selector: 'app-about',
  templateUrl:'./about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {
  activities:IActivities[]=[
    {
      img:'p-1',
      title:'خدمات پس از خرید',
      description:'میزبان صدای گرمتان هستیم. هدف تیم پشتیبانی بانی مد تلاش با تمام قوا برای ارائه بهترین خدمات به مشتریان عزیز می باشد.'
    },
    {
      img:'p-2',
      title:'ضمانت بازگشت کالا',
      description:'تا 15 روز برای احترام به انتخاب مشتریان کالای خریداری شده برگردانده می‌شود.'
    },
    {
      img:'p-3',
      title:'ضمانت اصالت',
      description:'تمامی کالاها اورجینال و با ضمانت اصل بودن از نمایندگی معتبر تهیه و ارائه می‌شوند.'
    },
    {
      img:'p-4',
      title:'ارسال سریع و رایگان',
      description:'ارسال رایگان برای خریدهای بالای 1میلیون تومان و در زمان انتخابی مشتری به سریعترین شکل ممکن می‌باشد.'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
