import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css'],
})
export class UpdateCartComponent implements OnInit {
  productId: string;
  productName: string;
  quantity: number;
  quantityAvailable: number;
  emailId: string;
  status: boolean;
  errorMsg: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emailId = this.userService.getUser();
    if (this.emailId == null) {
      this.router.navigate(['/login']);
    }
    this.productId = this.route.snapshot.params['productId'];
    this.productName = this.route.snapshot.params['productName'];
    this.quantity = parseInt(this.route.snapshot.params['quantity']);
    this.quantityAvailable = parseInt(
      this.route.snapshot.params['quantityAvailable']
    );
  }

  updateCart(qty: number) {
    this.userService
      .updateCartProduct(this.emailId, this.productId, qty)
      .subscribe(
        (responseUpdateCartStatus) => {
          this.status = responseUpdateCartStatus;
          if (this.status) {
            alert('Product quantity updated successfully.');
            this.router.navigate(['/viewCart']);
          } else {
            alert('Some error occured, please try after some time.');
            this.router.navigate(['/viewCart']);
          }
        },
        (responseUpdateCartError) => {
          this.errorMsg = responseUpdateCartError;
          console.log(this.errorMsg);
          alert('Some error occured, please try after some time.');
          this.router.navigate(['/viewCart']);
        },
        () => console.log('UpdateCart method executed successfully.')
      );
  }
}
