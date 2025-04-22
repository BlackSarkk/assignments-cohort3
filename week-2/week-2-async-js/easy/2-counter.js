
let i = 0
const counter = () => {
    
    console.log(i++)
    setTimeout(counter, 1000)
}

counter()
