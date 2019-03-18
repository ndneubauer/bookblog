import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ApiService } from './services/api.service';
import { FeaturedReview } from './models/featuredReview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ ConfigService, ApiService ]
})
export class AppComponent implements OnInit {
  public featuredReviews: FeaturedReview[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getFeaturedReviews().subscribe(data => {
      this.featuredReviews = data.data;
    });
  }
}
