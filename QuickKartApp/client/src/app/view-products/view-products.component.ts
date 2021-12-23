import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../interfaces/Category';
import { IProduct } from '../interfaces/Product';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnInit {
  products: IProduct[];
  filteredProducts: IProduct[];
  categoryId: string = '0';
  searchInput: string = '';
  categories: ICategory[];
  imageSrc: string;
  showMsgDiv: boolean = false;
  errorMsg: string;
  user: string;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.getProductCategories();

    this.userService.$user.subscribe((user) => {
      this.user = user;
    });

    if (this.products == null) this.showMsgDiv = true;

    this.filteredProducts = this.products;
    this.imageSrc = 'assets/images/add-item.jpg';
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
        this.filteredProducts = products;
        this.showMsgDiv = false;
      },
      (error) => {
        this.products = null;
        this.errorMsg = error;
        console.log(this.errorMsg);
      },
      () => console.log('GetProducts method executed successfully')
    );
  }

  getProductCategories() {
    this.productService.getProductCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        this.categories = null;
        this.errorMsg = error;
        console.log(this.errorMsg);
      },
      () => console.log('GetProductCategoies method excuted successfully')
    );
  }

  searchProductsByCategory(categoryId: string) {
    this.categoryId = categoryId;

    this.filteredProducts = this.products;

    this.search();
  }

  searchProductName(searchInput) {
    this.searchInput = searchInput.target.value;

    this.search();
  }

  search() {
    if (this.categoryId == '0' && this.searchInput == '') {
      this.filteredProducts = this.products;
    } else if (this.searchInput == '') {
      this.filteredProducts = this.products.filter(
        (product) => product.categoryId.toString() == this.categoryId
      );
    } else {
      if (this.categoryId == '0') {
        this.filteredProducts = this.products.filter((product) =>
          product.productName.includes(this.searchInput)
        );
      } else {
        this.filteredProducts = this.products.filter(
          (product) =>
            product.productName.includes(this.searchInput) &&
            product.categoryId.toString() == this.categoryId
        );
      }
    }
  }

  addToCart(product: IProduct) {
    if (!this.user) {
      this.router.navigate(['/login']);
    } else {
      this.userService.addProductToCart(product.productId, this.user).subscribe(
        (responseProductData) => {
          //this.message = responseProductData;
          if (responseProductData) {
            alert('Product added sucessfully.');
          }
        },
        (responseProductError) => {
          this.errorMsg = responseProductError;
          console.log(this.errorMsg);
          alert(
            'Sorry, something went wrong. Please try again after sometime.'
          );
        },
        () => console.log('AddToCart method executed successfully')
      );
    }
  }
}
