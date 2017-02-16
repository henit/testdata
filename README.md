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
```

## Author

```javascript
import author from 'testdata/got/author';
```

*JSON Direct links*

- [Author](got/author.json)

## Books

```javascript
import books from 'testdata/got/books';
// books.book1, ...

import book1 from 'testdata/got/books/book1';
```

*JSON Direct links*

- [Book 1 - A Game of Thrones](got/books/book1.json)
- [Book 2 - A Clash of Kings](got/books/book2.json)
- [Book 3 - A Storm of Swords](got/books/book3.json)
- [Book 4 - A Feast for Crows](got/books/book4.json)
- [Book 5 - A Dance with Dragons](got/books/book5.json)
- [Book 6 - The Winds of Winter](got/books/book6.json)
- [Book 7 - A Dream of Spring](got/books/book7.json)

## [Characters](got/characters/index.js)

```javascript
import characters from 'testdata/got/characters';
// characters.EddardStark, ...

import ned from 'testdata/got/characters/eddard-stark';

import 'testdata/got/characters/eddard-stark.jpg';
// For Webpack loaders or similar use cases
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
// ['quote 1', 'quote 2', ...]
```

# Photos

- [City](photos/city.jpg) ([1280px](photos/city-1280.jpg), [640px](photos/city-640.jpg) )
- [Crystal](photos/crystal.jpg) ([1280px](photos/crystal-1280.jpg), [640px](photos/crystal-640.jpg))
- [Fireplace](photos/fireplace.jpg) ([1280px](photos/fireplace-1280.jpg), [640px](photos/fireplace-640.jpg))
- [Food](photos/food.jpg) ([1280px](photos/food-1280.jpg), [640px](photos/food-640.jpg))
- [Lantern](photos/lantern.jpg) ([1280px](photos/lantern-1280.jpg), [640px](photos/lantern-640.jpg))
- [Mountains](photos/mountains.jpg) ([1280px](photos/mountains-1280.jpg), [640px](photos/mountains-640.jpg))
- [Music](photos/music.jpg) ([1280px](photos/music-1280.jpg), [640px](photos/music-640.jpg))
- [Night](photos/night.jpg) ([1280px](photos/night-1280.jpg), [640px](photos/night-640.jpg))
- [Owl](photos/owl.jpg) ([1280px](photos/owl-1280.jpg), [640px](photos/owl-640.jpg))
- [Sunset](photos/sunset.jpg) ([1280px](photos/sunset-1280.jpg), [640px](photos/sunset-640.jpg))
- [Winter](photos/winter.jpg) ([1280px](photos/winter-1280.jpg), [640px](photos/winter-640.jpg))

# Copyright

Testdata contains references, data and multimedia contents that is copied from published novels and media. This contents is used for the sake of familiarity and respect for the quality of the works. Testdata is open source and not for any kind of commercial use.

Source of photos: [pixabay.com](https://pixabay.com/), released under Creative Commons CC0.
