import { expect } from 'chai';
import Validate from 'jsft-validate';
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
            expect(() => Validate.assertValid(schema, '123')).to.throw(Error);
            expect(() => Validate.assertValid(schema, 42)).to.throw(Error);
            expect(() => Validate.assertValid(schema, {})).to.throw(Error);
            expect(() => Validate.assertValid(schema, { foo: 'bar' })).to.throw(Error);
        });

        it('should validate character mocks', () => {
            Validate.assertValid(schema, loc1);
            Validate.assertValid(schema, loc2);
            Validate.assertValid(schema, loc3);
            Validate.assertValid(schema, loc4);
            Validate.assertValid(schema, loc5);
            Validate.assertValid(schema, loc6);
        });
    });
});
