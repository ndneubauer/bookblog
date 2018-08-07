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
      "PostedBy": "Dave Post"
    },
    {
      "Date": "July 25, 2018",
      "Heading": "2018 Mythopoeic Award Winner",
      "PostedAt": "3:22 PM",
      "PostedBy": "Dave Post"
    }
  ]
}
