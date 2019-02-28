import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Review, ReviewResponse } from '../models/review';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';

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
}
