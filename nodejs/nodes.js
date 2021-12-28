const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    const items = [{
            title: "D",
            message: "esenvolver aplicações"
        },

        {
            title: "E",
            message: "JS usa JavaScipt para renderizar"
        },
        {
            title: "M",
            message: "uito fácil de se usar"
        },
        {
            title: "A",
            message: "té você aprender"
        },
        {
            title: "I",
            message: "ntegre todos os seus conhecimentos"
        },
        {
            title: "S",
            message: "intaxe simples"
        },

    ];
    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando Javascript."
    res.render('pages/nodes', {
        qualitys: items,
        subtitle: subtitle
    });
})

app.get("/sobre", function(req, res) {
    res.render('pages/about');
})

app.listen(8080);
console.log("Server online")