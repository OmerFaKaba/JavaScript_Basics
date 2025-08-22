/*
    charAt()
    concat()
    indexof()
    lastindexof()
    toUpperCase()
    toLowerCase()
    trim()
    slice()
    substring()
    replace()
    split()
    valueOf()
    startsWith()
    endsWith()

*/


let str = "Ömer Faruk Kaba"
let str_space = "   Ömer Faruk Kaba"
let num = 1992

let sum = str.concat(", ", num)


console.log(str.indexOf("Ö"))
console.log(str.charAt(0))
console.log(str.lastIndexOf("Faruk"))

console.log(str_space.trim())

console.log(str.slice(7, 10))

console.log(str.replace("Ömer", "Ali"))
console.log(str.split(" "))

console.log(str.startsWith("Fa"))
console.log(str.endsWith("a"))