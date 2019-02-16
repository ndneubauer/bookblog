export class Review {
    constructor(public ReviewId: number, public BookTitle: string, public BookAuthor: string, 
        public ReviewAuthor: string, public ReviewDate: string, public ImageUrl: string, 
        public Summary: string) {}
}
