let bookone = {
    title : '1984',
    author : 'George Orwell',
    pages : 200
}

let booktwo = {
    title : 'A peoples history of the united states',
    author : 'Howard Zinn',
    pages : 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} was written by ${book.author} and is ${book.pages}`,
        pageCountSummary : `${book.title} is ${book.pages} long`
    }
   
}


let bookSummary = getSummary(bookone)
let otherBookSummary = getSummary(booktwo)

console.log(bookSummary.pageCountSummary)
console.log(bookSummary.summary)
console.log(otherBookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

//input
let fahrenheit = 32

let convertFahrenheit = function(fahrenheitValue) {

    let celcius = (fahrenheit - 32) * (5 / 9)
    let kelvins = (fahrenheit + 459.67) * (5 / 9)
    return {
        celcius: `${celcius} C`,
        kelvins: `${kelvins} K`,
        fahrenheit: `${fahrenheitValue}`
    }

}

let conversionTemp = convertFahrenheit(fahrenheit)
console.log(conversionTemp)
console.log(conversionTemp.celcius)
console.log(conversionTemp.kelvins)
console.log(conversionTemp.fahrenheit)

