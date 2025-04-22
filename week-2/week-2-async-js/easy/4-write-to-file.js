// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs').promises

function writeToFile(filename, content){
    try{
        fs.writeFile(filename, content, 'utf8')
        console.log(`File has been written successfully`)
    } catch (error) {
        console.log('Error while writing to file:', error)
    }
}

writeToFile('test1.txt', "Hello worldd!!")

