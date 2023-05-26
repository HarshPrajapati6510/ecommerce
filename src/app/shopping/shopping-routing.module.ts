import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingDetailsComponent } from './shopping-details/shopping-details.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'shoplist/allproduct',
    pathMatch:'full'
  },
  {
    path:'shoplist',
    redirectTo:'shoplist/allproduct',
    pathMatch:'full'
  },
  {
    path:'shoplist/:category',
    component:ShoppingPageComponent
  },
  {
    path:'shopdetails/:id',
    component:ShoppingDetailsComponent
  },
  {
    path:'add-cart/:id',
    component:AddCartComponent
  },
  {
    path:'checkout',
    component:CheckOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
