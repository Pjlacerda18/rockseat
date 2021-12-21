function cratePhrases() {
    console.log("A educação é a maior arma para mudar o mundo.")
    console.log("Só existem duas coisas infinitas, o universo e a estupidez humana.")
    console.log("Acreditar que todo homem é honesto é loucura, mas acreditar que nenhum é, é ainda pior.")

}
cratePhrases()
const sum = function(number1, number2) {
    total = number1 + number2
    return total
}
let number1 = 34
let number2 = 33

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma dos dois é ${sum(number1, number2)}`)
console.log(total)

function person(name) {
    this.name = name

    this.walk = function() {
        return this.name + " está estudando."
    }

}

const pedro = new person("Pedro")
const jorge = new person("Jorge")
console.log(pedro.walk())
console.log(jorge.walk())