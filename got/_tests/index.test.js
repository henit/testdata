import { expect } from 'chai';
import got from '../index';

describe('GoT index', () => {
    it('should contain sample GoT data', () => {
        expect(got.book1).to.be.an('object');
        expect(got.book1.name).to.equal('A Game of Thrones');
        expect(got.EddardStark).to.be.an('object');
        expect(got.EddardStark.nickname).to.equal('Ned');
        expect(got.KingsLanding.type).to.equal('city');
        expect(got.quotes).to.be.an('array');
        expect(got.getRandomBook).to.be.a('function');
        expect(got.getRandomCharacter).to.be.a('function');
        expect(got.getRandomLocation).to.be.a('function');
        expect(got.getRandomQuote).to.be.a('function');
    });

    describe('.getRandomBook()', () => {
        it('should return a random book object', () => {
            expect(got.getRandomBook()).to.be.an('object');
        });
    });

    describe('.getRandomCharacter()', () => {
        it('should return a random character object', () => {
            expect(got.getRandomCharacter()).to.be.an('object');
        });
    });

    describe('.getRandomLocation()', () => {
        it('should return a random character object', () => {
            expect(got.getRandomCharacter()).to.be.an('object');
        });
    });

    describe('.getRandomQuote()', () => {
        it('should return a random quote text', () => {
            expect(got.getRandomQuote()).to.be.a('string');
        });
    });
});
