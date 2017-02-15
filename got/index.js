var got = {
    author: require('./author'),
    quotes: require('./quotes')
};

var books = require('./books');
for (var k in books) {
    got[k] = books[k];
}

var characters = require('./characters');
for (var k in characters) {
    got[k] = characters[k];
}

// Random getters
got.getRandomBook = function() {
    var keys = Object.keys(books);
    var key = keys[Math.floor(Math.random()*keys.length)];
    return books[key];
};

got.getRandomCharacter = function() {
    var keys = Object.keys(characters);
    var key = keys[Math.floor(Math.random()*keys.length)];
    return characters[key];
};

got.getRandomQuote = function() {
    var keys = Object.keys(got.quotes);
    var key = keys[Math.floor(Math.random()*keys.length)];
    return got.quotes[key];
};

module.exports = got;
