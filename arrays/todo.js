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


const sortTodos = function(todos) {
    todos.sort(function (a,b){
        if (!a.completed && b.completed ) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }

    });
}

const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()

    })

    if (index > -1) {
            todos.splice(index,1)
        } 

    }

const findTodoStatus = function(todos) {
    return todos.filter(function(todo,index){
        return !todo.completed 

        })
}
    
    

// deleteTodo(todos,'Eat pickles')

// console.log("completed")
// console.log(findTodoStatus(todos))

//console.log(todos)
sortTodos(todos)
console.log(todos)
