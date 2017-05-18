import { expect } from 'chai';
import tv4 from 'tv4';
import schema from '../schemas/book.json'
import book1 from '../books/book1.json';
import book2 from '../books/book2.json';
import book3 from '../books/book3.json';
import book4 from '../books/book4.json';
import book5 from '../books/book5.json';
import book6 from '../books/book6.json';
import book7 from '../books/book7.json';
import bookInvalid from '../books/bookInvalid.json';

describe('books', () => {
    describe('schema', () => {
        it('should invalidate other types of contents', () => {
            expect(tv4.validate('123', schema)).to.be.false;
            expect(tv4.validate(42, schema)).to.be.false;
            expect(tv4.validate({}, schema)).to.be.false;
            expect(tv4.validate({ foo: 'bar' }, schema)).to.be.false;
            expect(tv4.validate(bookInvalid, schema)).to.be.false;
        });

        it('should validate character mocks', () => {
            expect(tv4.validate(book1, schema)).to.be.true;
            expect(tv4.validate(book2, schema)).to.be.true;
            expect(tv4.validate(book3, schema)).to.be.true;
            expect(tv4.validate(book4, schema)).to.be.true;
            expect(tv4.validate(book5, schema)).to.be.true;
            expect(tv4.validate(book6, schema)).to.be.true;
            expect(tv4.validate(book7, schema)).to.be.true;
        });
    });
});
