import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.less']
})
export class ReviewListComponent implements OnInit {
  public reviews: Review[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getReviews().subscribe(data => {
      this.reviews = data.data;
    });
  }
}
