import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing.module';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { RateProductComponent } from './rate-product/rate-product.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { ContractNamePipe } from './contract-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductsComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackComponent,
    CommonLayoutComponent,
    PurchasesComponent,
    CartProductsComponent,
    ViewRatingsComponent,
    HomeComponent,
    CustomerLayoutComponent,
    RateProductComponent,
    ViewCartComponent,
    UpdateCartComponent,
    UpdateReviewComponent,
    ContractNamePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
