// Learning about objects
// Objects model things and stuff

let book = {
    title : '1984',
    author : 'George Orwell',
    pages : 200
}

console.log(`${book.title} was written by ${book.author} and is ${book.pages}`)

// Change the title
book.title = 'Animal Farm'

console.log(`${book.title} was written by ${book.author} and is ${book.pages}`)


// Challenge Time
// Model a person
// name, age, location

let person = {
    name : 'Paul',
    age : 27,
    location: 'Ottawa'

}
// add one
person.age += 1

// return the sentance
let sentance = `${person.name} is ${person.age} and lives in ${person.location}`
console.log(sentance)