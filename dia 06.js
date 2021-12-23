console.log(90.3 * 7.2) //Multiplicação
console.log(12 / 2) //Divisão
console.log(2234 + 122383) //Adição
console.log(9876 - 1237)

let remainder
remainder = 11 % 3
console.log(remainder) //Resto da divisão

let increment = 0
increment++
console.log(increment) //Incrementa mais 1, sempre incrementa após a linha
let decrement = 0
console.log(--decrement) //Decrementa menos 1, função inversa do inrement e ambos podem ser usados da mesma forma

console.log(999 ** 3) // Exponencial

let pao = true
let queijo = false

console.log(pao && queijo) //true se os dois forem iguais. if no false

console.log(pao || queijo) //true se um deles for true. false se ambos forem false

console.log(!queijo) // Muda o estado do boolean,true to false or false to true.

const niceBreakfast = pao && queijo ? 'Café só a massa' : 'Café mó paia'
console.log(niceBreakfast)
let age = 19
const canDrive = age >= 18 ? "Pode dirigir" : "Não pode dirigir"
console.log(canDrive)

let temperature = 37.5
if (temperature >= 37.6) {
    console.log("Febre alta")
} else if (temperature >= 37.5 && temperature >= 37.0) {
    console.log("Febril")
} else {
    console.log("Saudável")
}

let expression = "D"
switch (expression) {
    case 'a':
        console.log("Cabeça")
        break
    case 'b':
        console.log("Ombro")
        break
    default:
        console.log("Inviavél")

}

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case "+":
            result = number1 + number2

            break;
        case "-":
            result = number1 - number2
            break;
        case "*":
            result = number1 * number2
            break;
        case "/":
            result = number1 / number2

        default:
            console.log("Não disponível")
            break;
    }
    return result
}
console.log(calculate(4, "*", 89))


function sayMyName(name = 'Jorge') {
    if (name === '')
        throw "Nome é obrigatório"

    console.log(name)
} //Ocorrera erro caso não ponha try and catch
try {
    sayMyName('Pedro')
} catch (a) {
    console.log(a)
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break
    } // caso queira excluir somente um numero usar o Continue ao invés do Break
    console.log(i)
}
//While caso não se saiba quando parar