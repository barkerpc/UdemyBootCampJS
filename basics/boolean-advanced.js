let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Account is Locked')
} else if (isAccountLocked === true || userRole === 'admin'){
    console.log('Welcome admin')
} else {
    console.log('Welcome')
}

let temp = 45

if (temp <= 31) {
    console.log('Brrrrr')
} else if (temp >= 100) {
    console.log('Too Hot')
} else {
    console.log('Pretty Good')
}