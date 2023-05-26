import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit{
  val:any=1
  addCartList:any[]=[]
  productsList:any
  constructor(private productsService:ProductsService, private activeroute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activeroute.paramMap.subscribe({
      next:(res:any)=>{
        // console.log('add to cart me mil gaya id==>',res);
        this.getProductList(res.params.id)
      }
    })
    // this.addCart()
  }
 getProductList(id:any){
  this.productsService.addTocart(id).subscribe({
    next:(res:any)=>{
      this.productsList=res.products
      console.log(' add to cart mil gaya===>', this.productsList);
     this.productsList.forEach((element:any) => {
      this.addCart(element.productId)
      
    });
    
  }
})
}
addCart(id:any){
  let quantity=1
  this.productsService.getSingleProduct(id).subscribe({
    next:(res:any)=>{
      this.addCartList.push(res)
      this.addCartList.forEach((element:any)=>{
        element.quantity=quantity
      })
      console.log('helooooooooooooo',this.addCartList);
    }
  })
}
quantityIncrease(index:any){
  if (this.addCartList[index].quantity<=1) {
    this.addCartList[index].quantity=1
  }
  this.addCartList[index].quantity++
 }
 quantityDecrease(index:any){
  if (this.addCartList[index].quantity<=1) {
    this.addCartList[index].quantity=1
  }
  this.addCartList[index].quantity--
 }
}
