const fs = require('fs')

const expensiveTask = () => {
    let m = 0
    for(let i = 0; i<1000000000; i++){
        m += i
    }
    console.log(`Expensive operation done`)
}

expensiveTask()


const read = () => {
    fs.readFile('test1.txt', 'utf-8', (err, data) => {
        if(err){
            console.log(err)
            return;
        } else{
            console.log(data)
            return;
        }
    })
}


read()
