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


function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error("Não identificado")

    }
    let UpdatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

    if (celsiusExists) {
        UpdatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9 / 5 + 32
        degreeSign = 'F'
    }

    return formula(UpdatedDegree) + degreeSign
}

try {
    console.log(transformDegree("50F"))
    console.log(transformDegree("10c"))
    console.log(transformDegree("30Z"))
} catch (Error) {
    console.log(Error.message)
}







const booksByCategory = [{
        category: "Riqueza",
        books: [{
                title: "Os segredos de uma mente milionária",
                author: "T. Harv Eker",
            }, {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clarson"
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Letcher"
            },

        ],
    },
    {
        category: "Inteligência Emocional",
        books: [{
                title: "Você é insubstítuivel",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os sete hábitos de pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ],
    }
]
const totalcategories = booksByCategory.length
console.log(totalcategories)
for (let category of booksByCategory) {
    console.log("Total de livros na categoria:" + category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            }
        }

    }

    console.log("Total de autores: " + authors.length);
}

countAuthors()


function booksOfAuthor(author) {
    let books = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`);
}

booksOfAuthor('Augusto Cury')