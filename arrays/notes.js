const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Things to work on',
    body: 'Exersize, eating better'
} , {
     title: 'Office modifications',
     body : 'Get a new seat'
}]

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.lowerCase === noteTitle.lowerCase

//     })
//     return notes[index]

// }

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()

    })
    
}

const note = findNote(notes, 'My next trip')
console.log(note)

