//Suma de numeros impares
// let suma= 0;
// let n= parseInt(prompt("Cuantos numeros desea ingresar?"));
// for (let i = 0; i < n; i++) {
//     let x = parseFloat(prompt("Ingrese el numero"));
//     if(x%2 != 0){
//         suma = suma+x;
//     }
    
// }
// alert("La suma de los numeros impares es: "+suma)

//Numero par o impar

// let pares= 0;
// let impares= 0;

// let numero= parseInt(prompt("Cuantos numeros desea ingresar?"));
// for(let i = 0; i <= numero; i++){
//     let x=parseInt(prompt("Ingrese el numero"));
//     if(x%2===0){
//         pares++;
//     }else {
//         impares++;
//     }
// }
// alert("La cantidad de pares es: "+pares)
// alert("La cantidad de impares es: "+impares)

//Devolver numero invertido

let numero=prompt("Ingrese un numero")
let invertido= 0
let temp=0
while(numero==0){
temp=numero%10
invertido=invertido*10+temp
numero=numero/10
}
console.log(invertido)
