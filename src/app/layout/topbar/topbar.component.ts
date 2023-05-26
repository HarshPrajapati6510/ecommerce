import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  topbar:any={
    leftNav:['About','Contact','Help','FAQs'],
    rightNav:[
      {
        navitem:'My Account',
        dropdown:['Sign in','Sign up']

      },
      {
        navitem:'USD',
        dropdown:['EUR','GBP','CAD']
      },
      {
        navitem:'EN',
        dropdown:['FR','AR','RU']
      }
    ],
    customerService:{
      title:'Customer Service',
      phone:'+012 345 6789'
    }
    
  }

}
