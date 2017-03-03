import { expect } from 'chai';
import Validate from 'jsft-validate';
import schema from '../schemas/character.json'
import char1 from '../characters/cersei-lannister.json';
import char2 from '../characters/daenerys-targaryen.json';
import char3 from '../characters/eddard-stark.json';
import char4 from '../characters/jaime-lannister.json';
import char5 from '../characters/jon-snow.json';
import char6 from '../characters/petyr-baelish.json';
import char7 from '../characters/tyrion-lannister.json';

describe('character', () => {
    describe('schema', () => {
        it('should invalidate other types of contents', () => {
            expect(() => Validate.assertValid(schema, '123')).to.throw(Error);
            expect(() => Validate.assertValid(schema, 42)).to.throw(Error);
            expect(() => Validate.assertValid(schema, {})).to.throw(Error);
            expect(() => Validate.assertValid(schema, { foo: 'bar' })).to.throw(Error);
        });

        it('should validate character mocks', () => {
            Validate.assertValid(schema, char1);
            Validate.assertValid(schema, char2);
            Validate.assertValid(schema, char3);
            Validate.assertValid(schema, char4);
            Validate.assertValid(schema, char5);
            Validate.assertValid(schema, char6);
            Validate.assertValid(schema, char7);
        });
    });

    // describe('mocks', () => {
    //     it('should validate with the schema', () => {

    //     });
    // });
});
