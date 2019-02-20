import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Review } from '../models/review';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review-full',
  templateUrl: './review-full.component.html',
  styleUrls: ['./review-full.component.less']
})
export class ReviewFullComponent implements OnInit {
  review$: Observable<Review>;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.review$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getReview(+params.get('id')))
    );
  }
}
