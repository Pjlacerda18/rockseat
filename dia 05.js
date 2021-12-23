let number = 345572881.2839283
console.log(number.toFixed(3).replace(".", ","))
let phrase = "Eu quero viver o amor"
let myArray = phrase.split(" ")

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLocaleUpperCase())
console.log(phrase.includes("amor"))
let techs = ["Html", "Css", "Js "]
techs.push("NodeJs") //Coloca no final da array
techs.unshift("Sql") // Coloca no Ínicio da array
techs.pop() //Remove do fim da array
techs.shift() //Remove do ínicio da array
let index = techs.indexOf('Css')
console.log(index)
console.log(techs.slice(1, 3)) // retirar algo da array.

let name = new String('Pedro');
name.surname = "Lacerda"

let age = new Number(22)
console.log(name, age)