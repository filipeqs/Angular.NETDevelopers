import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../interfaces/ICartProduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css'],
})
export class CartProductsComponent implements OnInit {
  cartProducts: ICartProduct[];
  errorMsg: string;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartService.getCartProducts().subscribe(
      (products) => {
        console.log(products);
        this.cartProducts = products;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
}
