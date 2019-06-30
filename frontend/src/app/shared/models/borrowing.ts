import { Specimen } from './specimen';
import { User } from './user';

export class Borrowing {
    specimen: Specimen;
    user: User;
    returnDate: Date;
    expire: Date;
}