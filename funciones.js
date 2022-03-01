// let sumar = (numero1,numero2,numero3) => numero1 + numero2 + numero3

// console.log(sumar(5,4,7))

function iniciar(){
    console.log("inciando el programa")
}

function procesar(){
    setTimeout(()=>{console.log("procesando el programa")},3000)
    
}

function finalizar(){
    console.log("finalizando programa")
}

iniciar()
procesar()
finalizar()