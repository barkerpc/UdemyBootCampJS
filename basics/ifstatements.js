/// is the equality operator
/// != not equal operator
// < - less than operator
// > - greater than operator
// >= greater than or equal to operator
// <= less than oro equal to operator

let temp = 31;

if (temp <= 31) {
    console.log('is freezing')

} else {
    console.log('not freezing')
}

if (temp >= 100 ) {
    console.log ('super hot')
} else {
    console.log ('not quite hot enough')
}

// create an age variable set to my age
let age = 37
// calculate is child 7 or younger
let isChild = age <= 7 
// is senior 65 or older
let isSenior = age >= 65

if (isChild) {
    console.log('Im a child')
} else {
    if (isSenior) { 
        console.log('Im a senior')
    } else {
        console.log('some where in betweens')
    }
}