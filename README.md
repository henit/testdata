# testdata

Test data for unit tests and ui development. Because Lorem is boring!

# Usage

```shell
npm install --save-dev testdata
```

# Game of Thrones

## All objects

```javascript
import got from 'testdata/got';
// got.author, got.book1, got.TyrionLannister, ...
```

## Get random object

```javascript
import got from 'testdata/got';

got.getRandomBook();
got.getRandomCharacter();
got.getRandomQuote();

## Author

```javascript
import author from 'testdata/got/author';
```

*JSONDirect links*

- [Author](got/author.json)

## Books

```javascript
// Import json data - books.book1
import books from 'testdata/got/books';
```

*JSONDirect links*

- [Book 1 - A Game of Thrones](got/books/book1.json)
- [Book 2 - A Clash of Kings](got/books/book2.json)
- [Book 3 - A Storm of Swords](got/books/book3.json)
- [Book 4 - A Feast for Crows](got/books/book4.json)
- [Book 5 - A Dance with Dragons](got/books/book5.json)
- [Book 6 - The Winds of Winter](got/books/book6.json)
- [Book 7 - A Dream of Spring](got/books/book7.json)

## [Characters](got/characters/index.js)

```javascript
// Import json data - characters.EddardStark
import characters from 'testdata/got/characters';

// For Webpack loaders or similar use cases:
import 'testdata/got/characters/eddard-stark.jpg';
```

*JSON Direct links*

- [Cersei Lannister](got/characters/cersei-lannister.json)
- [Daenerys Targaryen](got/characters/daenerys-targaryen.json)
- [Eddard Stark](got/characters/eddard-stark.json)
- [Jaime Lannister](got/characters/jaime-lannister.json)
- [Jon Snow](got/characters/jon-snow.json)
- [Petyr Baelish](got/characters/petyr-baelish.json)
- [Tyrion Lannister](got/characters/tyrion-lannister.json)

*Images*

- [Cersei Lannister](got/characters/cersei-lannister.jpg)
- [Daenerys Targaryen](got/characters/daenerys-targaryen.jpg)
- [Eddard Stark](got/characters/eddard-stark.jpg)
- [Jaime Lannister](got/characters/jaime-lannister.jpg)
- [Jon Snow](got/characters/jon-snow.jpg)
- [Petyr Baelish](got/characters/petyr-baelish.jpg)
- [Tyrion Lannister](got/characters/tyrion-lannister.jpg)

## [Quotes](got/quotes.json)

```javascript
import quotes from 'testdata/got/quotes';
// ['quote 1', 'quote2', ...]
```

# Copyright

Testdata contains references, data and multimedia contents that is copied from published novels and media. This contents is used for the sake of familiarity and respect for the quality of the works. Testdata is open source and not for any kind of commercial use.
