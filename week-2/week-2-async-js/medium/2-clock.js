/**
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 
*/

const now = () => {
    setInterval(() => {
        const date = new Date()
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0')
        console.log(`${hours}:${minutes}:${seconds}`)
        console.log(date.toLocaleTimeString())
    }, 1000)
}

now()