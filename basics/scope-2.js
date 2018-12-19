let name = 'Andrew'

if (true) {
   let name = 'Mike'
    if (true) {
        name = 'Jenn'
        //varible shadowing
        console.log(name)
     
    }
}

if (true) {
    console.log(name)
    
}