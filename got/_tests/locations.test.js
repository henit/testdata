import { expect } from 'chai';
import tv4 from 'tv4';
import schema from '../schemas/location.json'
import loc1 from '../locations/braavos.json';
import loc2 from '../locations/casterly-rock.json';
import loc3 from '../locations/castle-black.json';
import loc4 from '../locations/kings-landing.json';
import loc5 from '../locations/meereen.json';
import loc6 from '../locations/winterfell.json';

describe('locations', () => {
    describe('schema', () => {
        it('should invalidate other types of contents', () => {
            expect(tv4.validate('123', schema)).to.be.false;
            expect(tv4.validate(42, schema)).to.be.false;
            expect(tv4.validate({}, schema)).to.be.false;
            expect(tv4.validate({ foo: 'bar' }, schema)).to.be.false;
        });

        it('should validate character mocks', () => {
            expect(tv4.validate(loc1, schema)).to.be.true;
            expect(tv4.validate(loc2, schema)).to.be.true;
            expect(tv4.validate(loc3, schema)).to.be.true;
            expect(tv4.validate(loc4, schema)).to.be.true;
            expect(tv4.validate(loc5, schema)).to.be.true;
            expect(tv4.validate(loc6, schema)).to.be.true;
        });
    });
});
