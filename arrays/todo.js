const todo = ['Eat pickles', 'Eat more pickles', 'Buy more pickles','Buy some wine','Drink some wine']

let arrayLength = todo.length
let strArrayLength = `You have ${arrayLength} todos!`
let strTodoItemFirst = `Todo: ${todo[0]}`
let strTodoItemSecondLast = `Todo: ${todo[arrayLength-2]}`

console.log(strArrayLength)
console.log(strTodoItemFirst)
console.log(strTodoItemSecondLast)