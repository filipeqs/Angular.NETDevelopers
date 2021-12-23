import { RouterModule, Routes } from '@angular/router';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { RateProductComponent } from './rate-product/rate-product.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'viewProducts',
    component: ViewProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'viewCart',
    component: ViewCartComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'viewPurchases', component: PurchasesComponent },
  {
    path: 'viewRatings',
    component: ViewRatingsComponent,
  },
  {
    path: 'rate-product/:productId/:productName',
    component: RateProductComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updateCart/:productId/:productName/:quantity/:quantityAvailable',
    component: UpdateCartComponent,
  },
  { path: '**', component: HomeComponent },
];

export const routing = RouterModule.forRoot(routes);
