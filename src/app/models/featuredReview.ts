import { ResponseMessage, Documentation } from './response';

export class FeaturedReview {
    constructor(public reviewId: number, public bookTitle: string, public bookAuthor: string, public imageUrl: string) {}
}

export class FeaturedReviewResponse {
    constructor(public data: FeaturedReview[], public success: boolean, public messages: ResponseMessage[],
                public documentation: Documentation[]) {}
}
