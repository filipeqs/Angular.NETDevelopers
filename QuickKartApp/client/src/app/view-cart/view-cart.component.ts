import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICartProduct } from '../interfaces/ICartProduct';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
})
export class ViewCartComponent implements OnInit {
  errorMsg: string;
  emailId: string;
  Products: ICartProduct[];
  showError: boolean = false;
  status: boolean = false;
  imageSrc: string;

  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit() {
    this.emailId = sessionStorage.getItem('userName');
    if (this.emailId == null) {
      this.router.navigate(['/login']);
    } else {
      this._userService.getCartProducts(this.emailId).subscribe(
        (resCartProductData) => {
          this.Products = resCartProductData;
          if (this.Products.length == 0) {
            this.showError = true;
            this.errorMsg = 'Your cart is empty.';
          }
        },
        (resCartProductError) => {
          this.Products = null;
          this.errorMsg = resCartProductError;
          console.log(this.errorMsg);
          if (this.Products.length == 0) {
            this.showError = true;
            this.errorMsg = 'No records found.';
          }
        },
        () => console.log('GetCartProducts method executed successfully')
      );
      this.imageSrc = '/assets/images/delete-item.jpg';
    }
  }

  updateCart(prod: ICartProduct) {
    this.router.navigate([
      '/updateCart',
      prod.productId,
      prod.productName,
      prod.quantity,
      prod.quantityAvailable,
    ]);
  }

  removeProductFromCart(prod: ICartProduct) {
    this._userService.deleteCartProduct(prod.productId).subscribe(
      (responseRemoveCartProductStatus) => {
        this.status = responseRemoveCartProductStatus;
        if (this.status) {
          alert('Product deleted successfully.');
          this.ngOnInit();
        } else {
          alert('Product could not be deleted. Please try after sometime.');
        }
      },
      (responseRemoveCartProductError) => {
        this.errorMsg = responseRemoveCartProductError;
        alert('Something went wrong. Please try after sometime.');
      },
      () => console.log('RemoveProductFromCart method executed successfully')
    );
  }
}
