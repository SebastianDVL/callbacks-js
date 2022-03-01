// function principal(callback){
//     setTimeout(()=>
//     {console.log("Soy la Perra Principal")
//     callback()},4000)

// }
// principal(()=>console.log("soy la Perra Secundaria"))

// function sumar(numero1,numero2,resta){
//     setTimeout(()=>{
//         console.log(`La suma de ${numero1}+${numero2} es: ${numero1 + numero2}`)
//         resta(numero1,numero2)
//     },5000)
// }

// sumar(15,10,(numero1,numero2)=>console.log(`La resta de ${numero1}-${numero2} es: ${numero1 - numero2}`))

// function acceder(nombre,edad,pass,validar){
   
//     setTimeout(()=>{
//      let usuario = {name:nombre,ed:edad,password:pass}
//      validar(usuario)
//     },3000)
// }

// acceder("Sebastian",18,"contraseña",(usuario)=>console.log(usuario.ed < 18 ? "Prohibido, eres menor de edad!": `Bienvenido ${usuario.name}`))

function almacenar(n1,n2,n3,n4,n5,sumar){
    let numeros = Array(n1,n2,n3,n4,n5)
    sumar(numeros)
}

almacenar(1,2,3,4,5,(numeros)=>{
    console.log(`${numeros[0]} + ${numeros[1]} + ${numeros[2]} + ${numeros[3]} + ${numeros[4]} = ${numeros.reduce((acc,num)=>acc + num,0)}`)
})
