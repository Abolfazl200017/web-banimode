import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-product',
  templateUrl:'./offer-product.component.html',
  styleUrls: ['./offer-product.component.scss']
})
export class OfferProductComponent implements OnInit {
  time:number[]=[0,45,2];
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.time[0]){
        this.time[0]--;
      }else if(this.time[1]){
        this.time[1]--;
        this.time[0] = 59;
      }else if(this.time[2]){
        this.time[2]--;
        this.time[1] = 59;
        this.time[0] = 59;
      }
    },1000)
  }

}
