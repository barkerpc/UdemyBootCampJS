// Gloabl scope (convertFahrenheitToCelsius), tempOne, tempTwo
  // Local Scope num, celcius
    // Local scope isFreezing

let convertFahrenheitToCelsius = function(num) {
    let celcius = (num - 32) * (5 / 9)

    if (celcius <=0 ) {
        let isFreezing = true
    }
    return celcius
} 

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(50)

console.log(tempOne)
console.log(tempTwo)