export class Book {
    _id?: string;
    title: string;
    author: string;

    constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }
}