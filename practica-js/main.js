

// Clase 1 (Sintaxis basica)
// let num1 = 4;
// let num2 = 13;
// let result = num1 + num2;
// console.log('el resultado es: '+result);
// let nombre = prompt('Ingresa tu nombre');
// alert('Bienvenido '+nombre);


// Clase 2 (IF)
// let usuario = prompt("Cual es tu nombre?").toUpperCase();

// if (usuario=='TOMAS') {
//     alert("Bienvenido Tomas");
// }else {
//     alert("Vos no sos Tomas, sos ",usuario);
// }

// let numero= parseInt(prompt("Ingresa un numero "));

// if (numero==15) {
//     alert ("Los numeros coinciden");
// }
// let nombre =prompt("Ingrese su nombre ");
// let apellido =prompt("Ingrese su apellido ");

// if((nombre != "") && (apellido != "") ){
//     alert ("El nombre es "+nombre +apellido);
// }

// Clase 3 (Ciclos e iteraciones)



// for (let i = 0; i < 10; i++) {
//     if (i===5) {
//         break;
//     }
//     console.log(i);

// }

// let contador=true;
// while (contador==true) {
//     console.log("mensaje");
//     contador=confirm("Desea continuar?");
// }
// let intentos = 3;
// let identificar = true;

// do {
//     let usuario = prompt("Ingresa tu usuario, (Solo 3 intentos)");
//     if(usuario=== null) {
//         alert("por favor intente de nuevo");
//         break;
//     }
//     if(usuario==="admin" && intentos>=1) {
//         alert("Bienvenido "+usuario);
//         identificar=false;
//     } else {
//         alert("no se reconoce al usuario "+usuario);
//         intentos--;
//         if(intentos<1) {
//             alert("Usted superó los 3 intentos.");
//             break;
//         }
//     }



// } while (identificar === true);

//Clase 4 Funciones

// function saludar(){
//     let nombre=prompt("Ingrese su nombre");
//     alert("Bienvenido ",nombre);
//     confirm("Desea comprar");
// }

// saludar();
//Parametros

// let nombre=prompt("Ingrese tu nombre");

// function saludar(nombre){
//     console.log("hola "+nombre);
// }


// function sumar() {
//     let a =parseInt(prompt("Ingrese el primer numero: "));
//     let b =parseInt(prompt("Ingrese el segundo numero: "));
//     let suma=a+b;
//     alert("La suma es: "+suma);
// }

// sumar();


const suma = function(a,b){return a+b;}
console.log(suma(2,3))