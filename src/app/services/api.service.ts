import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Review } from '../models/review';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';

// tslint:disable: max-line-length

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private configService: ConfigService) {}

    getReviews(): Observable<Review[]> {
        return this.http.get<Review[]>(`${this.configService.ApiUrl}api/reviews`);
    }

    getReview(id: number) {
        return this.getReviews().pipe(
            map((reviews: Review[]) => reviews.find(review => review.ReviewId === +id))
          );
    }
}
