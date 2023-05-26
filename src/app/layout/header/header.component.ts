import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  index:any
  categoryList:any
  isActive:any
  categories:any={
    title:'Categories',
    categoriesList:[
      {
        name:'Dresses',
        dropdown:['Mens Dresses','Womens Dresses','Kid Dresses']
      },
      {
        name:'Shirt',
        dropdown:[]
      },
      {
        name:'Jeans',
        dropdown:[]
      },
      {
        name:'Swimwear',
        dropdown:[]
      },
      {
        name:'Slipwear',
        dropdown:[]
      },
      {
        name:'sportwear',
        dropdown:[]
      },
      {
        name:'Jumpsuit',
        dropdown:[]
      },
      {
        name:'Blazers',
        dropdown:[]
      },
      {
        name:'Jackets',
        dropdown:[]
      },
      {
        name:'Shoes',
        dropdown:[]
      }
    ],
    navBar:[
      {
        label:'Home',
        route:'/',
        dropdown:''
      },
      {
        label:'Shop',
        route:'/shop',
        dropdown:''
      },
      {
        label:'Pages',
        route:'',
        dropdown:[
          {
            label:'Shopping Cart',
            route:'shop/add-cart'
          },
          {
            label:'Check Out',
            route:'shop/checkout'
          }
        ]
      },
      {
        label:'Contact',
        route:'/',
        dropdown:''
      },
    ]
  }
  constructor(private productsService:ProductsService){
    
  }
  ngOnInit(): void {
    this.productsService.getAllCategory().subscribe({
      next:(res:any)=>{
        this.categoryList=res
      }
    })
    console.log('hello',this.index);
    
  //  this.linkActive(0)
  }
  linkActive(index:any){
    this.isActive=index
  }
}
