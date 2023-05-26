import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-shopping-products',
  templateUrl: './shopping-products.component.html',
  styleUrls: ['./shopping-products.component.scss']
})
export class ShoppingProductsComponent implements OnInit{
  totalRate:any=5
  math=Math
  productList:any
  paramCategory:any
  tflag:any=false
  bflag:any=true
  iconList:any=['fa fa-shopping-cart','far fa-heart','fa fa-sync-alt','fa fa-search']
  btnGrp:any=[
    {
      title:'Sorting',
      btn:['asc','desc']
    },
    {
      title:'Showing',
      btn:['10','20','30']
    }
  ]

  recentProduct:any={
    title:'Recent Products',
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
      },
      {
        imgurl:"assets/img/product-9.jpg",
        productName:'Product Name Goes Here',
        realPrice:'$123.00',
        offerPrice:'$123.00',
        rating:2.5,
        availableProduct:99
      }
    ]
  }
  constructor(private productsService:ProductsService,private activeroute:ActivatedRoute){
  }
  ngOnInit(): void {
    this.activeroute.paramMap.subscribe({
      next:(res:any)=>{
        if (res.params.category=='allproduct') {
          this.allProducts()
        }else{
          this.categoryProduct(res.params.category)
        }
      }
    })
    //This function for rate counting
    this.rateCounter(5)
  }
  categoryProduct(category:any){
    this.productsService.getSpecificCategoryProducts(category).subscribe({
      next:(res:any)=>{
        this.productList=res
      }
    })
  }
  allProducts(){
    this.productsService.getAllProducts().subscribe({
      next:(res:any)=>{
        this.productList=res
        // console.log('reeeeeeeesssssss==>',res);
        
      }
    })
  }
  rateCounter(total:any){
    this.totalRate=Array(total)
  }
  sortingProducts(title:any,value:any){
    if (title=='Sorting') {
      this.productsService.sortToProducts({sort:value}).subscribe({
        next:(res:any)=>{
          this.productList=res
        }
      })
    }
  }
  productOrganize(value:any){
    if (value=='block') {
      this.bflag=true
      this.tflag=false
    }
    else{
      this.tflag=true
      this.bflag=false
    }
  }
}
