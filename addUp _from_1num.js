//Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. (e.g. addUp(4) ➞ 10 [1+2+3+4 = 10])

function addUp(num) {
    for (let i = num; i > 0; i--) {
        console.log(i)
    }
}

addUp(3)