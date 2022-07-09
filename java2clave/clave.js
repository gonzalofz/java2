let num1 =  document.querySelector("#num1")
let num2 =  document.querySelector("#num2")
let num3 =  document.querySelector("#num3")
let total = document.querySelector("#total")
let calc = document.querySelector("#calc")


calc.onclick = function (){
    let pass = (num1.value + num2.value + num3.value)
    total.innerHTML = pass

if (pass == 911){
    total.innerHTML = 'Password 1 esta correcto !!!'
    
    
} else if (pass == 714){
    total.innerHTML = 'Password 2 esta correcto !!!'
    
    
} else{
    total.innerHTML = 'Password incorrecto !!!'
    
}
}
