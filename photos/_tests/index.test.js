import { expect } from 'chai';
import photos from '../index';

describe('Testdata index', () => {

    describe('.getRandomPhoto()', () => {
        it('should return a random photo url', () => {
            expect(photos.getRandomPhoto()).to.be.a('string');
        });
    });

});
