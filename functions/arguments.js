let add = function(a, b, c) {

    return a + b + c

}


let result = add(10, 1, 3)
console.log(result)

// default args

let getScoreText = function (name = 'Turkey', score = 0) {
    return `Name: ${name} Score: ${score}`
}

getScoreText()
let scoreText = getScoreText('Paul', 100)
console.log(scoreText)


//get a tip

let tipCalculator = function(totalBill, tipPercent = 0.2) {
    let tipAmount = totalBill * tipPercent
    let tipNorm = tipPercent * 100

    return `A ${tipNorm}% tip on $${totalBill} would be ${tipAmount}`

}

let tipOne = tipCalculator(100)
let tipTwo = tipCalculator(100, 0.3)

console.log(tipOne)
console.log(tipTwo)

console.log('Andrew' + " Mead") //Sloppy pick one and stick with it

//Template String
let name = 'Barker'
let age = 38
console.log(`Hey, my name is ${name} and I am ${age}`)