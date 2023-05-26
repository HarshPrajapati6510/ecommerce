import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsModule } from 'src/app/products/products.module';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./shopping-details.component.scss']
})
export class ShoppingDetailsComponent implements OnInit{
  math=Math
  totalRate:any
  productList:any
  singleProductDetail:any
  quantity:any=1
  paramId:any
  iconList:any=['fa fa-shopping-cart','far fa-heart','fa fa-sync-alt','fa fa-search']
  productDetail:any={
    productName:'Product Name Goes Here',
    rating:4.7,
    review:99,
    price:'$150',
    des:`Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
    clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
    Nonumy`,
    checkBox:[
      {
        title:'Sizes',
        input:['XS','S','M','L','XL'],
      },
      {
        title:'Colors',
        input:['Black','White','Red','Blue','Green'],
      }
    ]
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav:true,
    autoplay:true,
    navText:['<i class="fa fa-2x fa-angle-left text-dark carousel-control-prev" ></i>','<i class="fa fa-2x fa-angle-right text-dark carousel-control-next"></i>'],
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
  }
  Options: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    margin:20,
    responsive: {
      0: {
        items: 1
      },
      280: {
        items: 2
      },
      560: {
        items: 3
      },
      900: {
        items: 4
      }
    },
  }
  constructor(private productsService:ProductsService, private activeroute:ActivatedRoute, private route:Router,private reff:ChangeDetectorRef){


  }
  ngOnInit(): void {
    this.rateCounter(5)
    this.activeroute.paramMap.subscribe({
      next:(res:any)=>{
        // console.log('Param Id==>', res.params.id);
        if (res) {
          this.paramId=res.params.id
          this.singleProduct(res.params.id)
        }
        
      }
    })
    console.log('quantity',this.quantity);
    
    this.productsCarousal();
  }
  rateCounter(total:any){
    this.totalRate=Array(total)
  }
  singleProduct(id:any){
    this.productsService.getSingleProduct(id).subscribe({
      next:(res:any)=>{
        this.singleProductDetail=res
        console.log('single==>',this.singleProductDetail);
      },
      error:(err:any)=>{
        console.log(err);
        
      },
      complete:()=>{
        this.reff.markForCheck()
      }
    })
  }
  quantityPlus(){
    if (this.quantity<=0) {
      this.quantity=1
    }
    else{
      this.quantity++;
    }
    console.log(this.quantity);
    
  }
  quantityMinus(){
    if (this.quantity<=0) {
      this.quantity=1
    }
    else{
      this.quantity--
    }
    console.log(this.quantity);
  }
  addToCart(){
    console.log('mil jaa paramId==>',this.paramId);
    if (this.paramId>7) {
      this.paramId=7
    }
    this.route.navigateByUrl(`/shop/add-cart/${this.paramId}`)
    
    
  }
  productsCarousal(){
    this.productsService.getAllProducts().subscribe({
      next:(res:any)=>{
        this.productList=res
        // console.log('reeeeeeeesssssss==>',res);
      }
    })
  }
}
