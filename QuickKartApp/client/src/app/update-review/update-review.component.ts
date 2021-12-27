import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRating } from '../interfaces/IRating';
import { RatingService } from '../services/rating.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css'],
})
export class UpdateReviewComponent implements OnInit {
  updateReviewForm: FormGroup;
  userEmail: string;

  constructor(
    private ratingService: RatingService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBulder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userEmail = this.userService.getUser();

    const rating = this.route.snapshot.params;
    this.updateReviewForm = this.formBulder.group({
      productId: [rating.productId],
      productName: [rating.productName],
      reviewRating: [rating.reviewRating],
      reviewComments: [rating.reviewComments],
    });
  }

  updateReview() {
    const rating: IRating = {
      emailId: this.userEmail,
      productId: this.updateReviewForm.value.productId,
      productName: this.updateReviewForm.value.productName,
      reviewRating: +this.updateReviewForm.value.reviewRating,
      reviewComments: this.updateReviewForm.value.reviewComments,
    };

    console.log(rating);

    this.ratingService.updateReviewComments(rating).subscribe(
      (status) => {
        if (status) {
          alert('Review updated');
          this.router.navigate(['/viewRatings']);
        } else {
          alert('Error updating');
          this.router.navigate(['/viewRatings']);
        }
      },
      (error) => {
        console.log(error);
        alert('Error updating');
        this.router.navigate(['/viewRatings']);
      }
    );
  }
}
