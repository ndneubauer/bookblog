import { Component } from "@angular/core";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent {
  blogEntries: any[] = [
    {
      "Date": "July 25, 2018",
      "Heading": "2018 World Fantasy Award Finalists",
      "PostedAt": "3:43 PM",
      "PostedBy": "Dave Post",
      "ContentHTML": "The 2018 <a href='https://www.worldswithoutend.com/books_wfa_index.asp'>World Fantasy Awards</a> finalists have been announced. The awards will be presented during the <a href='http://www.mythsoc.org/mythcon/mythcon-49.htm' target='_blank' rel='noopener noreferrer'>Mythcon 49</a>, held July 20-23, 2018 at the Ritz-Carlton in Atlanta GA.",
      "NumComments": 0,
      "Categories": "Awards, World Fantasy Awards"
    },
    {
      "Date": "July 25, 2018",
      "Heading": "2018 Mythopoeic Award Winner",
      "PostedAt": "3:22 PM",
      "PostedBy": "Dave Post",
      "ContentHTML": "Our congrats to John Crowley and all the finalists. You can see the complete list of winners in all categories over at <a href='http://locusmag.com/2018/07/2018-mythopoeic-award-winners/' target='_blank' rel='noopener noreferrer'>Locus</a>.",
      "NumComments": 2,
      "Categories": "Awards, Mythopoeic Award"
    }
  ]
}
