/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
    let startTime = Math.floor(Date.now() / 1000);
    console.log('Start Time:', startTime);

    function computation(m) {
        for (let i = 0; i < m; i++) {
            sum += i;
        }
    }

    computation(n);

    let endTime = Math.floor(Date.now() / 1000);
    console.log('End Time:', endTime);

    const totalTime = endTime - startTime;

    return totalTime;
}

console.log(calculateTime(100000000) + 's');
