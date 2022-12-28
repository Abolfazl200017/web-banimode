import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarItems:any=[
    {
      name: "جدیدترین‌ها",
      class:{'opacity-0':true,'hidden':true},
      items:{
        title:'جدیدترین‌ها',
        list:[
          'مردانه',
          'زنانه',
          'نوجوان',
          'بچگانه',
          'کاکا اسپرت',
          'عطر و ادکلن',
          'آرایشی بهداشتی',
          'اکسسوری',
          'لوازم خانه',
          'کی تویز',
          'فرهنگ و هنر',
        ]
      }
    },
    {name: "زنانه",class:{'opacity-0':true,'hidden':true},},
    {name: "مردانه",class:{'opacity-0':true,'hidden':true},},
    {name: "نوجوان",class:{'opacity-0':true,'hidden':true},},
    {name: "بچگانه",class:{'opacity-0':true,'hidden':true},},
    {name: "سایز بزرگ",class:{'opacity-0':true,'hidden':true},},
    {name: "کاکااسپرت",class:{'opacity-0':true,'hidden':true},},
    {name: "آرایشی و بهداشتی",class:{'opacity-0':true,'hidden':true},},
    {name: "عطر و ادکلن",class:{'opacity-0':true,'hidden':true},},
    {name: "لوازم خانه",class:{'opacity-0':true,'hidden':true},},
    {name: "کی تویز",class:{'opacity-0':true,'hidden':true},},
    {name: "فرهنگ و هنر",class:{'opacity-0':true,'hidden':true},},
    {name: "برندها",class:{'opacity-0':true,'hidden':true},},
    {name: "فروش ویژه",class:{'opacity-0':true,'hidden':true},},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  openNavbarItem(index:number){
    this.navbarItems[index].class = {'opacity-0':true , 'hidden':false};
    setTimeout(() => {
      this.navbarItems[index].class = {'opacity-1':false , 'hidden':false}
    }, 1);
  }
  closeNavbarItem(index:number){
    this.navbarItems[index].class = {'opacity-0':true , 'hidden':false};
    setTimeout(() => {
      this.navbarItems[index].class = {'opacity-1':true , 'hidden':true}
    }, 300);
  }
}
