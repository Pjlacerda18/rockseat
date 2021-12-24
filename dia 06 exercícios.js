let score = 99
if (score <= 100) {
    console.log("A")
} else if (score <= 89) {
    console.log("B")
} else if (score <= 79) {
    console.log("C")
} else if (score <= 69) {
    console.log("D")
} else if (score <= 59) {
    console.log("F")
} else {
    console.log("Nota não está na escala")
}

let family = {
    incomes: [1200, 2300, 102, 253],
    expenses: [200, 5000, 342, 45, 900]
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value
    }



    return total
}

function calculatebalance() {
    const calculateincomes = sum(family.incomes)
    const calculateexpenses = sum(family.expenses)
    const total = calculateincomes - calculateexpenses
    if (total >= 0) {
        console.log("Seu saldo é " + total + "R$ positivo")
    } else if (total < 0) {
        console.log("Seu saldo é " + total + "R$ negativo")
    }
}
calculatebalance()