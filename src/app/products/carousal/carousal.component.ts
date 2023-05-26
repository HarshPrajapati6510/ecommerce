import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 10,
    navSpeed: 700,
    items:1,
    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    
  };
  carousel:any=[
    {
      imgUrl:"assets/img/carousel-1.jpg",
      name:'Men Fashion',
      des:'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
    },
    {
      imgUrl:"assets/img/carousel-2.jpg",
      name:'Women Fashion',
      des:'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
    },
    {
      imgUrl:"assets/img/carousel-3.jpg",
      name:'Kid Fashion',
      des:'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
    }
  ]
  offerList:any=[
    {
      imgurl:"assets/img/offer-1.jpg",
      title:'Special Offer',
      dis:'Save 20%'
    },
    {
      imgurl:"assets/img/offer-2.jpg",
      title:'Special Offer',
      dis:'Save 20%'
    }
  ]
}
