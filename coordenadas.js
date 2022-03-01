/*let calcularDistancia = (x1,y1,x2,y2)=>Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))

console.log(calcularDistancia(0,0,20,-50).toFixed(2))*/

let naves = ["APQ2555:Sara Bel","APQ2556:Nodin Chavdri","APQ2557:Finn","sadsad","AQ:John","null"]

let clasificarNombre = str =>str.split(":")[1]

naves.forEach(nave =>{
    if(nave.includes(":"))console.log(clasificarNombre(nave))    
})


