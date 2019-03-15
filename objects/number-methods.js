let num = 103.941

console.log(num.toFixed(2))

// Math based methods
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.random())

let min = 1
let max = 5
// random num between min and max
//let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)


//1-5 true if correct
let makeGuess = function(numberGuess) {
    
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    
    if (numberGuess === randomNum) {
        return true
    } else {
        return false
    }


}

console.log(makeGuess(1))