 /*const element = document.getElementById("Blog-Title")
                                                                                                                                                                                             console.log(element); */
 const elementi = document.getElementsByClassName("container")
 console.log(elementi)
     //QuerySelector e QuerySelectorAll são usados para pegar tudo tags, e outros.
 const element = document.querySelector("h1")
 element.textContent = "Olá, Sejam bem vindos"
 element.style.backgroundColor = "rgba(255, 255, 255,)"
 element.classList.toogle = "container"

 const body = document.querySelector('body')
     //console.log(body.parentElement)
 console.log(body.childNodes)
 const div = document.createElement("div")
 div.innerText = "Olá mundo!!!"

 body.append(div)

 function print() { console.log("Printar") }
 /*const element = document.querySelector("input")
 element.value = "Outro Valor"
 const header = document.querySelector("Header")
 header.setAttribute('id', 'header')
 const headerId = document.querySelector("#Header")
 console.log(headerId)
 header.removeAttribute('id')*/