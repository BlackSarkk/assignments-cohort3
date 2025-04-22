const fs = require('fs').promises

const filter = async (filename) => {
    try {
        const content = await fs.readFile(filename, 'utf-8')

        if (!content) {
            return;
        }

        const cleanContent = () => {
            let arr = []
            let newArr = []
            let gap = 0
            content.split('').forEach((letter) => { arr.push(letter) })


            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == ' ') {
                    gap++;
                    if (gap < 2) {
                        newArr.push(arr[i])
                        continue;
                    }
                } else {
                    gap = 0
                    newArr.push(arr[i])
                }

            }

            return newArr.join('')
        }

        const betterContent =  cleanContent()

        const WriteToFile = async () => {
            try {
                await fs.writeFile(filename, betterContent)
                console.log(`Content cleaned`)
            } catch (Error) {
                console.error('Error writing file:', Error.message)
            }
        }

        WriteToFile()

    } catch (error) {
        console.error('Error reading file:', error.message)
    }
}

filter('test.txt')