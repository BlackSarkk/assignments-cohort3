const fs = require('fs')

const read = () => {
    console.log(fs.readFileSync('test1.txt', 'utf-8'));
};

read();
