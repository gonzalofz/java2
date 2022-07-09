let cant1 = document.querySelector("#cant1")
let cant2 = document.querySelector("#cant2")
let cant3 = document.querySelector("#cant3")
let calc = document.querySelector("#cal")
let total = document.querySelector("#total")

calc.onclick = function (){
    let suma =  (Number(cant1.value) + Number(cant2.value) + Number(cant3.value))
    total.innerHTML = suma
    let faltan = (Number(10) - suma)
    let muchos = (suma - Number(10))


    if(suma == 10){ total.innerHTML = " bueno"; }
    else if (suma < 10 && suma != 0){ total.innerHTML = ` faltan ${faltan}`  }
    else if (suma > 10){ total.innerHTML = ` muchos ${muchos}` }
    else if (suma == 0){ total.innerHTML = "no te gustan ?"; }
}