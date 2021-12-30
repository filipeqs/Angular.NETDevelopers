import { Component, OnInit } from '@angular/core';
import { IRating } from '../interfaces/IRating';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-view-ratings',
  templateUrl: './view-ratings.component.html',
  styleUrls: ['./view-ratings.component.css'],
})
export class ViewRatingsComponent implements OnInit {
  ratings: IRating[];
  errorMsg: string;

  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.getRatings();
  }

  getRatings() {
    this.ratingService.displayAllReviewDetailsByEmailId().subscribe(
      (ratings) => {
        this.ratings = ratings;
      },
      (error) => {
        this.ratings = [];
        this.errorMsg = error;
      }
    );
  }

  deleteRating(rating: IRating) {
    this.ratingService.deleteRating(rating).subscribe(
      (status) => {
        if (status) {
          alert('Rating Deleted');
          this.ngOnInit();
        } else {
          alert('Error Deleting Rating');
        }
      },
      (error) => {
        console.log(error);
        alert('Error Deleting Rating');
      }
    );
  }
}
