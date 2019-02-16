import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.less']
})
export class ReviewListComponent implements OnInit {
  public reviews: Review[];

  ngOnInit(): void {
    this.reviews = [
      new Review(1, 'Golden State', 'Ben Winters', 'Matt Buscemi', 'Friday 15th February 2019','https://img2.sfbook.com/books/small/golden-state.jpg','In the wake of the 2016 US presidential election, a meme boiled up to the surface of our cultural dialogue about us having entered an age of “post-truth.” As the election showed us, we have arrived into a societal configuration, in which two major ideological groups do not just vote for different parties, but also interpret the world in completely different ways. Hence, the term “post-truth.” On the surface, it seems to members of one side that the other is ignoring &l...'),
      new Review(2, 'Star Trek Prometheus: In the Heart of Chaos', 'Bernd Perplies', 'Sam Tyler', 'Thursday 14th February 2019', 'https://img2.sfbook.com/books/small/star-trek-prometheus:-in-the-heart-of-chaos.jpg', 'The original USS Enterprise was sent out on a five year mission to explore Space, but even the biggest Star Trek fan would not want to know about every single detail that happened on the voyage. We can forgo the times that they slept or went to the loo. Perhaps even skip a few lengthy sessions between colleagues spouting technobabble. The Star Trek Prometheus trilogy feels differently and sometimes put every extraneous detail was on the page, but now book three is in sight, things are startin...'),
      new Review(3, 'City of the Iron Fish', 'Simon Ings', 'Matt Buscemi', 'Monday 11th February 2019', 'https://img2.sfbook.com/books/small/city-of-the-iron-fish.jpg', 'By the end of the eighteenth century, our world had become fully charted, catalogued, mapped and explored. No longer could it be imagined that beyond some distant horizon there lay a land of extraordinary wonders—a hidden utopia, for example, nestled away somewhere safe from the corrupting influence of our imperfect, real-world societies. Or perhaps a fountain whose waters granted perpetual youth. Science fiction, of course, finds ways around this, the most obvious tropes being ...')
    ];
  }
}
