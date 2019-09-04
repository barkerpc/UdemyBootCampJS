const notes = [{},{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Things to work on',
    body: 'Exersize, eating better'
} , {
     title: 'Office modifications',
     body : 'Get a new seat'
}]

// console.log(notes.pop())
// notes.push('This is note 4')

// console.log(notes.shift())
// console.log(notes.unshift('This is note 0'))

// notes.splice(1,1)
//notes.splice(1,0,'This is note mid')
// notes[2].title = 'Note monkey'

// notes.forEach(function(item,index) {
//     console.log(item)
//     console.log(index)
// })

console.log(notes.length)
console.log(notes)
const index  = notes.findIndex(function (note,index) {
    //console.log(note)
    return note.title === 'Things to work on'

})
console.log(index)