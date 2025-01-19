

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


// const suma = function(a,b){return a+b;}
// console.log(suma(2,3))


//CLASE 5 OBJETOS
//Objetos literales

// const empleado1 = {
//     nombre: "Juan Perez",
//     cargo: "Profesor",
//     ingreso: "2021-03-25"
// }

//Objetos constructores o funciones constructoras

// function Producto(id,nombre,importe,stock) {
//     this.id=id,
//     this.nombre=nombre,
//     this.importe=importe,
//     this.stock=stock
//     this.importeConIva =function() { return this.importe*1.21}
// }

// const producto1= new Producto(1,"Teclado",24000,23);
// const producto2= new Producto(2,"Mouse",17000,23);
// const producto3= new Producto(3,"Monitor",169000,23);

// producto1.importeConIva()
// Clase 6 Arrays

// const frutas= ["manzana","pera","banana","manzana"]
// // frutas.unshift("uvas")
// // console.log(frutas);
// // const copia =frutas.slice(0,3)

// const copia= frutas.splice(1,3)

// const personas =[
//     {
//         nombre:"Juan",
//         edad:17,
//         ciudad: "BSAS"
//     },
//     {
//         nombre:"Pedro",
//         edad: 23,
//         ciudad: "Jujuy"
//     }
// ]
// console.log(personas[1].nombre)

//CLase 07 FUNCIONES DE ORDEN SUPERIOR

//Fucion que retorna funcion
// function asignarOperacion(op){
//     if (op=="sumar"){
//         return (a,b) => a+b;
//     } else if (op=="restar") {
//         return (a,b) => a-b;
//     }
// }
// let suma = asignarOperacion("sumar");
// let resta = asignarOperacion("restar");

// alert(suma(10,45));

//Funcion como parametro

//let arreglo = ["queso","pollo","arroz","lenteja"]
// function porCadaUno(arr,fn){
//     for(const el of arr){
//         fn(el)
//     }
// }
// porCadaUno(arreglo, console.log)


//Metodos
//forEach
// arreglo.forEach( function(x) {
//     console.log(x.toUpperCase())
// // })
//MAP
// const numeros = [1,2,3,4,5]
// const doble = numeros.map( (x)=> x*2)
// console.log(doble)
//FIND
// const numeros = [1,2,3,4,5]
// const encontrado = numeros.find( (x)=>x>3)

//CLASE 8 FUNCIONES  DE ORDEN SUPERIOR II

// //console.log(Math.round(Math.random() *20 + 10))
// const fechaActual = new Date()


// console.log(fechaActual.toLocaleString())
// console.log("El proceso tardo: "())

// const Producto = function(nombre, precio, stock){
//     this.nombre = nombre,
//     this.precio = precio,
//     this.stock = stock

// }

// let producto1 = new Producto("Lenovo", 30000,20)
// let producto2 = new Producto("Macbook", 34000,20)
// let producto3 = new Producto("Samsung", 30000,20)
// let producto4 = new Producto("Ryzen 5600", 30000,20)

// let lista = [producto1,producto2,producto3,producto4]

// function agregarProducto(){
//     let nombre= prompt("Ingresa el nombre del producto");
//     let precio= prompt("Ingresa el precio del producto");        
//     let stock= prompt("Ingrese el stock del producto");

//     if(precio==null | stock==null |nombre==""){
//         alert("Ingrese nuevamente los datos");
//         return
//     }

//     let producto5= new Producto(nombre,precio,stock);
//     lista.push(producto5)
// }
// agregarProducto()
// console.table(lista)

//CLASE 09 DOM
// let parrafo = document.getElementsByClassName("parrafo")
// console.log(parrafo[2].innerHTML)

// let parrafo2 = document.createElement("p")

// parrafo2.innerHTML ="<h2>Mensaje de Prueba</h2>"


// document.body.append(parrafo2)

// const productos = [
//     {id: 1, nombre: "Arroz", precio: 100},
//     {id: 2, nombre: "Pollo", precio: 150},
//     {id: 3, nombre: "Fideos", precio: 180},
//     {id: 4, nombre: "Pan", precio: 135},
    
    
// ]


//     for (const x of productos) {
//         let contenedor= document.createElement("div")
//         contenedor.innerHTML=   `<h3>ID: ${x.id}</h3>
//                                 <h1>Producto: ${x.nombre}</h1>
//                                 <b>Precio: ${x.precio}</b>`
//     document.body.appendChild(contenedor)
//                             }
// let boton = document.getElementById("boton")


// function saludar(){
//     let nombre=prompt("Ingrese su nombre")
//     alert(`Bienvenido ${nombre}`)
// }

//CLASE 10 EVENTOS

// boton.addEventListener("mouseout",saludar)
// let inputField = document.getElementById("miCampoDeTexto")
// inputField.addEventListener("change",function(event){
//     console.log("El valor cambio a: "+event.target.value)
// })
// let miForm = document.getElementById("formulario")

// miForm.addEventListener("submit",validarForm)

// function validarForm(e){
//     e.preventDefault()
//     console.log("Form enviado")
// }

//CLASE 11 STORAGE Y JSON

// localStorage.setItem(`bienvenida`,`bienvenidos a todos`)

// function crearClave(){
//     localStorage.setItem(`mi clave`,`coderhouse`)
// }

// crearClave()


// const inputNombre = document.querySelector("#inputNombre");
// const inputEdad = document.querySelector("#inputEdad");
// const boton = document.querySelector("#boton");


// function guardarForm (){
//     localStorage.setItem('nombre', inputNombre.value)
//     localStorage.setItem('edad', inputEdad.value)
    
// }

// boton.addEventListener("click",guardarForm)

// const producto1 ={
//     id: 1,
//     nombre: "Arroz"
// }
// const enJSON =JSON.stringify(producto1)

// console.log(enJSON)
// localStorage.setItem('producto1',enJSON)

//CLASE 12 OPERADOS AVANZADOS I

// let temp=30;
// temp<30? alert("frio"):alert("calor");

// const carrito = [];
// carrito.lenght === 0 && console.log("Esta vacio");
// let usuario = {
//     nombre: "Juan",
//     edad: 20,
//     cursos: {
//         javascript:"aprobado"
//     }
// }
// console.log(usuario?.cursos?.javascript || "La propiedad no existe")

// const {nombre, cursos:{javascript}} = usuario
// console.log(nombre)

// const desestructurar = (item) => {
//     const {nombre,edad,cursos}=item
//     console.log(nombre, edad, cursos)} 

// desestructurar(usuario)

//CLASE 13 OPERADORES AVANZADOS II Y WORKSHOPS

// const nombres = ["juan","pedro","luis"]
// const numeros = [1,5,6,74]
// //console.log(...numeros)

// const product = {
//     name: "lechuga",
//     price: 100,
//     category: "verduleria"
// }
// const productos = {
//     ...product,
//     descuento: 20,
//     price: 400
// }
// console.log(productos)

// function sumar(numeros) {
//      console.log(numeros.reduce((acc, n )=> acc+n, 0))
// }
// sumar(numeros)
//CLASE 14 LIBRERIAS
// Swal.fire({
//     title:"prueba",
//     text:"Hola Mundo",
//     icon: "info"
// });
