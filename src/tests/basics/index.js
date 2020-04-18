const path = require('path');

module.exports = {
    title: path.basename(__dirname),
    specs: [
        require('./sum-1')
    ]
};