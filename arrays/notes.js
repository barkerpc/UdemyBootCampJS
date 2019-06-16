const notes = ['This is note 1', 'This is note 2', 'This is note 3']

console.log(notes.pop())
notes.push('This is note 4')

console.log(notes.shift())
console.log(notes.unshift('This is note 0'))

// notes.splice(1,1)
//notes.splice(1,0,'This is note mid')
notes[2] = 'Note monkey'

notes.forEach(function(item,index) {
    console.log(item)
    console.log(index)
})

console.log(notes.length)
console.log(notes)