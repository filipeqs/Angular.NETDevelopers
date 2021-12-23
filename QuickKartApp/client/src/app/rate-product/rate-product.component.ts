import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRating } from '../interfaces/IRating';
import { RatingService } from '../services/rating.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.component.html',
  styleUrls: ['./rate-product.component.css'],
})
export class RateProductComponent implements OnInit {
  ratingForm: FormGroup;
  emailId: string;
  errorMsg: string;

  constructor(
    private userService: UserService,
    private ratinService: RatingService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.emailId = this.userService.getUser();

    this.ratingForm = this.formBuilder.group({
      productId: [
        { value: this.route.snapshot.params.productId, disabled: true },
      ],
      productName: [
        { value: this.route.snapshot.params.productName, disabled: true },
      ],
      reviewRating: [
        null,
        [Validators.required, Validators.min(1), Validators.max(5)],
      ],
      reviewComments: [''],
    });
  }

  submitRating() {
    const rating: IRating = {
      emailId: this.emailId,
      productId: this.ratingForm.controls.productId.value,
      productName: this.ratingForm.controls.productName.value,
      reviewRating: this.ratingForm.controls.reviewRating.value,
      reviewComments: this.ratingForm.controls.reviewComments.value,
    };

    this.ratinService.insertRating(rating).subscribe(
      (isSuccess) => {
        if (isSuccess) {
          this.router.navigate(['/viewPurchases']);
        } else {
          this.errorMsg = 'Failed to insert Rating';
        }
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
}
