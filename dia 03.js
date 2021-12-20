/*console.log("bem vindos ao sistema")
// Comentários em linha usando duas barras.
/* Com a barra e o asterisco temos um comentário
multi linha
até que seja indentificado o inverso do mesmo
console.log(['name: Pedro'])
var clima = "Quente"
console.log(clima)
const person = {
    name: 'Jonh',
    age: 18,
    weight: 110.2,
    isadmin: true
}
console.log(person)
const animals = ['Lion',
    'Monkey',
    {
        name: 'Dog',
        age: 3
    }
]
console.log(animals)
console.log(animals[2])
let weight
console.log(typeof wheight)*/


let student = {
    name: "Pedro",
    age: 22,
    stars: 4.9,
    issubscribed: true,
    weight: 115.1
}
console.log(`${student.name} de ${student.age} anos pesa ${student.weight} Kg. `)
let students = []

students = [
    student
]
const john = {
    name: 'John',
    age: 26,
    weight: 92.3,
    issubscribed: true
}
students[1] = john
console.log(students)