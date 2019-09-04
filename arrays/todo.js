const todo = ['Eat pickles', 'Eat more pickles', 'Buy more pickles','Buy some wine','Drink some wine']

let arrayLength = todo.length
let strArrayLength = `You have ${arrayLength} todos!`
let strTodoItemFirst = `Todo: ${todo[0]}`
let strTodoItemSecondLast = `Todo: ${todo[arrayLength-2]}`

todo.splice(2,1)
todo.push('Buy honey')
todo.shift()

console.log(strArrayLength)
//console.log(todo)
todo.forEach(function (item,index) {
    const num = index + 1
    const todoItems = `${num}. ${item}`
    console.log(todoItems)
    
})

// for(let count = 0; count < todo.length; count++) {
//     const num = count + 1
//     const todoItems = todo[count]
//     console.log(`${num}. ${todoItems}`)
// }