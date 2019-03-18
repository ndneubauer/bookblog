import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReviewResponse } from '../models/review';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { FeaturedReviewResponse } from '../models/featuredReview';

// tslint:disable: max-line-length

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private configService: ConfigService) {}

    getReviews(): Observable<ReviewResponse> {
        return this.http.get<ReviewResponse>(`${this.configService.ApiUrl}api/reviews`);
    }

    getReview(id: number) {
        return this.getReviews().pipe(
            map((response: ReviewResponse) => response.data.find(review => review.reviewId === +id))
          );
    }

    getFeaturedReviews() : Observable<FeaturedReviewResponse> {
        return this.http.get<FeaturedReviewResponse>(`${this.configService.ApiUrl}api/reviews/featured`);
    }
}
