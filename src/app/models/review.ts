import { ResponseMessage, Documentation } from './response';

export class Review {
    constructor(public reviewId: number, public bookTitle: string, public bookAuthor: string,
                public reviewAuthor: string, public reviewDate: string, public imageUrl: string,
                public summary: string) {}
}

export class ReviewResponse {
    constructor(public data: Review[], public success: boolean, public messages: ResponseMessage[],
                public documentation: Documentation[]) {}
}
