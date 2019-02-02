let add = function(a, b, c) {

    return a + b + c

}


let result = add(10, 1, 3)
console.log(result)

// default args

let getScoreText = function (name = 'Turkey', score = 0) {
    return 'Name:' + name + ' Score:' + score
}

getScoreText()
let scoreText = getScoreText('Paul', 100)
console.log(scoreText)


//get a tip

let tipCalculator = function(totalBill, tipPercent = 0.2) {
    return totalBill * tipPercent

}

let tipOne = tipCalculator(100)
let tipTwo = tipCalculator(100, 0.3)

console.log(tipOne)
console.log(tipTwo)