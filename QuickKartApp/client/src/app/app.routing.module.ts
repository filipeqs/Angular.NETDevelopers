import { RouterModule, Routes } from '@angular/router';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewProducts', component: ViewProductsComponent },
  { path: 'viewCart', component: CartProductsComponent },
  { path: 'viewPurchases', component: PurchasesComponent },
  { path: 'viewRatings', component: ViewRatingsComponent },
  { path: '**', component: HomeComponent },
];

export const routing = RouterModule.forRoot(routes);
