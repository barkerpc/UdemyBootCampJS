let name = ' Paul Barker '

// log the length
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name.includes('Paul',0))


let password = 'abc123password098'

console.log(password.includes('password'))

console.log(name.trim())

let isValidPassword = function(password) {

    // if length is > 8 and doesnt contain 'password'

    if (password.length > 8 && !password.includes('password')) {

        return true

    } else {
        
        return false
    }


}

console.log(isValidPassword('passwordlong'))

console.log(isValidPassword('gettinglong'))

console.log(isValidPassword('12short'))
