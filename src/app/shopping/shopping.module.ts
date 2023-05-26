import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingSidebarComponent } from './shopping-sidebar/shopping-sidebar.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingProductsComponent } from './shopping-products/shopping-products.component';
import { ShoppingDetailsComponent } from './shopping-details/shopping-details.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoppingSidebarComponent,
    ShoppingPageComponent,
    ShoppingProductsComponent,
    ShoppingDetailsComponent,
    AddCartComponent,
    CheckOutComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    CarouselModule,
    FormsModule
  ]
})
export class ShoppingModule { }
