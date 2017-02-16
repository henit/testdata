var photos = {};

const names = [
    'city', 'crystal', 'fireplace', 'food', 'lantern', 'mountains', 'music', 'night', 'owl', 'sunset', 'winter'
];

photos.getRandomPhoto = function(size) {
    var name = names[Math.floor(Math.random() * names.length)];

    switch (size) {
        case 1280:
            name = name + '-1280';
            break;
        case 640:
            name = name + '-640';
            break;
    }
    return 'https://github.com/henit/testdata/raw/master/photos/' + name + '.jpg';
};

module.exports = photos;
