let temp = 55


if (temp >= 60 && temp <= 90) {
    console.log('its nice out')
} else if (temp < 0 || temp > 120) {
    console.log('not nice')
} else {
    console.log('Meh no opinion')

}

//Challenge

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Eat the veggies')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Want some vegies')
} else {
    console.log('Anything goes')
}