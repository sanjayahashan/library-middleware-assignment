import { Specimen } from './specimen';

export class Book {
    id?: string;
    title: string;
    author: string;
    specimens: Specimen[];

    constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }
}