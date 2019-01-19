
// This is a function
let greetUser = function (){
    console.log("Welcome User")
}

greetUser()


let square = function (num) {
    let result = num * num  
    return result
}

let value = square(3)
let othervalue = square(10)

console.log(othervalue)
console.log(value)

//function converFahrenheitToCelsius

let convertFahrenheitToCelsius = function(num) {
    let celcius = (num - 32) * (5 / 9)
    return celcius
} 

let newtemp = convertFahrenheitToCelsius(32)

console.log(newtemp)