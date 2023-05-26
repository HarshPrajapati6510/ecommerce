import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CarousalComponent } from './carousal/carousal.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturesComponent } from './features/features.component';
import { RecentProductsComponent } from './recent-products/recent-products.component';
import { OfferComponent } from './offer/offer.component';
import { LogoCarouselComponent } from './logo-carousel/logo-carousel.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HomepageComponent,
    CarousalComponent,
    CategoriesComponent,
    FeaturesComponent,
    RecentProductsComponent,
    OfferComponent,
    LogoCarouselComponent,
    FeaturedProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CarouselModule,
  ]
})
export class ProductsModule { }
