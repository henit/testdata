var got = {
    author: require('./author')
};

var books = require('./books');
for (var k in books) {
    got[k] = books[k];
}

var characters = require('./characters');
for (var k in characters) {
    got[k] = characters[k];
}

console.info('GOT', got);

module.exports = got;
