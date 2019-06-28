export class Book {
    id?: string;
    title: string;
    author: string;

    constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }
}