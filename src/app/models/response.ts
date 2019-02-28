export class ResponseMessage {
    constructor(public type: number, public message: string){}
}

export class Documentation {
    constructor(public title: string, public content: string, public example: string){}
}
