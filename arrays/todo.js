const todos =  [{
    text: 'Eat Pickles',
    completed: true
}, {
    text: 'Eat more Pickles',
    completed: false
} , {
     text: 'Buy more Pickles',
     completed : false
}, {
     text: 'Buy wine',
     completed : false
	
}, { 
     text: 'Drink wine',
     completed : true
}
]

// let arrayLength = todo.length
// let strArrayLength = `You have ${arrayLength} todos!`
// let strTodoItemFirst = `Todo: ${todo[0]}`
// let strTodoItemSecondLast = `Todo: ${todo[arrayLength-2]}`

//convert to array of objects  text and completed

//create a function that works with the arrays to remove a todo by title

const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()

    })

    if (index > -1) {
            todos.splice(index,1)
        } 

    }

deleteTodo(todos,'Eat pickles')


console.log(todos)



// todo.splice(2,1)
// todo.push('Buy honey')
// todo.shift()

// console.log(strArrayLength)
// //console.log(todo)
// todo.forEach(function (item,index) {
//     const num = index + 1
//     const todoItems = `${num}. ${item}`
//     console.log(todoItems)
    
// })

// for(let count = 0; count < todo.length; count++) {
//     const num = count + 1
//     const todoItems = todo[count]
//     console.log(`${num}. ${todoItems}`)
// }