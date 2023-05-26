import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-sidebar',
  templateUrl: './shopping-sidebar.component.html',
  styleUrls: ['./shopping-sidebar.component.scss']
})
export class ShoppingSidebarComponent {
  sidebar:any=[
    {
      title:'Filter by price',
      category:[{title:'All Price',availableProduct:'1000'},{title:'$0 - $100',availableProduct:'150'},{title:'$100 - $200',availableProduct:'237'},{title:'$200 - $300',availableProduct:'150'},{title:'$300 - $400',availableProduct:'100'},{title:'$400 - $500',availableProduct:'99'}],
    },
    {
      title:'Filter by Color',
      category:[{title:'All Color',availableProduct:'1000'},{title:'Black',availableProduct:'150'},{title:'White',availableProduct:'237'},{title:'Red',availableProduct:'150'},{title:'Blue',availableProduct:'100'},{title:'Green',availableProduct:'99'}],
    },
    {
      title:'Filter by Size',
      category:[{title:'All Size',availableProduct:'1000'},{title:'XS',availableProduct:'150'},{title:'S',availableProduct:'237'},{title:'M',availableProduct:'150'},{title:'L',availableProduct:'100'},{title:'XL',availableProduct:'99'}],
    }
  ]

}
