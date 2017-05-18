import { expect } from 'chai';
import tv4 from 'tv4';
import schema from '../schemas/character.json'
import char1 from '../characters/cersei-lannister.json';
import char2 from '../characters/daenerys-targaryen.json';
import char3 from '../characters/eddard-stark.json';
import char4 from '../characters/jaime-lannister.json';
import char5 from '../characters/jon-snow.json';
import char6 from '../characters/petyr-baelish.json';
import char7 from '../characters/tyrion-lannister.json';

describe('characters', () => {
    describe('schema', () => {
        it('should invalidate other types of contents', () => {
            expect(tv4.validate('123', schema)).to.be.false;
            expect(tv4.validate(42, schema)).to.be.false;
            expect(tv4.validate({}, schema)).to.be.false;
            expect(tv4.validate({ foo: 'bar' }, schema)).to.be.false;
        });

        it('should validate character mocks', () => {
            expect(tv4.validate(char1, schema)).to.be.true;
            expect(tv4.validate(char2, schema)).to.be.true;
            expect(tv4.validate(char3, schema)).to.be.true;
            expect(tv4.validate(char4, schema)).to.be.true;
            expect(tv4.validate(char5, schema)).to.be.true;
            expect(tv4.validate(char6, schema)).to.be.true;
            expect(tv4.validate(char7, schema)).to.be.true;
        });
    });

    // describe('mocks', () => {
    //     it('should validate with the schema', () => {

    //     });
    // });
});
