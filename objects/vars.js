// var based variables 

if (10 == 10) {
    var firstName = 'Barker'
}

const setName = function() {
    var firstName = 'Monkey'
}

//firstName = 'paul'

//can be defined more than once
//var firstName = 'pickles'

//var is function scoped not block based
setName()
console.log(firstName)

// dont need to declare with var BAD!
console.log(age)

var age