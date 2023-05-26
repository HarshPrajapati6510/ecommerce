import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit{
  math=Math
  totalRate:any=5
  productList:any
  iconList:any=['fa fa-shopping-cart','far fa-heart','fa fa-sync-alt','fa fa-search']
  featureProduct:any={
    title:'Featured Products',
    productList:[
      {
        imgurl:"assets/img/product-1.jpg",
        productName:'Product Name Goes Here',
        realPrice:'$123.00',
        offerPrice:'$123.00',
        rating:5,
        availableProduct:99
      },
      {
        imgurl:"assets/img/product-2.jpg",
        productName:'Product Name Goes Here',
        realPrice:'$123.00',
        offerPrice:'$123.00',
        rating:4.3,
        availableProduct:99
      },
      {
        imgurl:"assets/img/product-3.jpg",
        productName:'Product Name Goes Here',
        realPrice:'$123.00',
        offerPrice:'$123.00',
        rating:3.5,
        availableProduct:99
      },
      {
        imgurl:"assets/img/product-4.jpg",
        productName:'Product Name Goes Here',
        realPrice:'$123.00',
        offerPrice:'$123.00',
        rating:3,
        availableProduct:99
      },
      {
        imgurl:"assets/img/product-5.jpg",
        productName:'Product Name Goes Here',
        realPrice:'$123.00',
        offerPrice:'$123.00',
        rating:4.7,
        availableProduct:99
      },
      {
        imgurl:"assets/img/product-6.jpg",
        productName:'Product Name Goes Here',
        realPrice:'$123.00',
        offerPrice:'$123.00',
        rating:5,
        availableProduct:99
      },
      {
        imgurl:"assets/img/product-7.jpg",
        productName:'Product Name Goes Here',
        realPrice:'$123.00',
        offerPrice:'$123.00',
        rating:4.5,
        availableProduct:99
      },
      {
        imgurl:"assets/img/product-8.jpg",
        productName:'Product Name Goes Here',
        realPrice:'$123.00',
        offerPrice:'$123.00',
        rating:3.7,
        availableProduct:99
      }
    ]
  }
  constructor(private productsService:ProductsService){

  }
  ngOnInit(): void {
    this.rateCounter(5)
    this.feturesProducts()
  }
  rateCounter(total:any){
    this.totalRate=Array(total)
  }
  feturesProducts(){
    this.productsService.getLimitedProducts({limit:8}).subscribe({
      next:(res:any)=>{
        // console.log('limited results==>',res);
        this.productList=res
      }
    })
  }
}
