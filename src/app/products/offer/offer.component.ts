import { Component } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
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
