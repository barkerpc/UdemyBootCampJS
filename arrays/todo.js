const todo = ['Eat pickles', 'Eat more pickles', 'Buy more pickles','Buy some wine','Drink some wine']

let arrayLength = todo.length
let strArrayLength = `You have ${arrayLength} todos!`
let strTodoItemFirst = `Todo: ${todo[0]}`
let strTodoItemSecondLast = `Todo: ${todo[arrayLength-2]}`


//delete 3rd item
//add new to the end
//remove the first item
todo.splice(2,1)
todo.push('Buy honey')
todo.shift()

console.log(strArrayLength)
console.log(todo)
// console.log(strTodoItemFirst)
// console.log(strTodoItemSecondLast)