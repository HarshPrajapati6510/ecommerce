import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apicall:ApiCallService) { }
  getAllCategory(){
     return this.apicall.getApi('https://fakestoreapi.com/products/categories',{})
  }
  getAllProducts(){
    return this.apicall.getApi('https://fakestoreapi.com/products',{})
  }
  getSpecificCategoryProducts(categoryName:any){
    return this.apicall.getApi(`https://fakestoreapi.com/products/category/${categoryName}`,{})
  }
  getLimitedProducts(params?:any){
    return this.apicall.getApi('https://fakestoreapi.com/products',{params})
  }
  getSingleProduct(id:any){
    return this.apicall.getApi(`https://fakestoreapi.com/products/${id}`,{})
  }
  sortToProducts(params?:any){
    return this.apicall.getApi('https://fakestoreapi.com/products',{params})
  }
  addTocart(id:any){
    return this.apicall.getApi(`https://fakestoreapi.com/carts/${id}`,{})
  }
}
