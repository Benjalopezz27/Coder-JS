//Calculadora de finanzas

const ingresos = function(monto,categoria,fecha){
    this.monto=monto
    this.categoria=categoria
    this.fecha = fecha
    
}
let ingreso1 = new ingresos(1200,"Salario","2024/12/01")
let ingreso2 = new ingresos(400,"Freelance","2024/12/11")


const gastos=function(monto,categoria,fecha) {
    this.monto = monto
    this.categoria = categoria
    this.fecha = fecha
}
let gasto1 = new gastos(150,"Comida","2024/12/14")
let gasto2 = new gastos(150,"Transporte","2024/12/20")
let gasto3 = new gastos(100,"Regalos","2024/12/23")

let ingresosArray = [ingreso1, ingreso2];
let gastosArray = [gasto1, gasto2, gasto3];


function agregarIngreso() {
   let monto = prompt("Ingrese el monto del nuevo ingreso: ")
   let categoria= prompt("Ingrese la categoria del nuevo ingreso: ")
   let fecha= new Date().toLocaleString()

    if(monto == null | categoria == "" |fecha == ""){
        alert("Ingrese nuevamente los datos!")
        return
    }
    let nuevoIngreso = new ingresos(Number(monto),categoria,fecha)
    ingresosArray.push(nuevoIngreso)
    }
function agregarGasto() {
   let monto = prompt("Ingrese el monto del nuevo gasto: ")
   let categoria= prompt("Ingrese la categoria del nuevo gasto: ")
   let fecha= new Date().toLocaleString()

    if(monto == null | categoria == "" |fecha == ""){
        alert("Ingrese nuevamente los datos!")
        return
    }
    let nuevoGasto = new gastos(Number(monto),categoria,fecha)
        gastosArray.push(nuevoGasto)
    }
   
    function calcularSaldoTotal() {
        let totalIngresos = 0;
        let totalGastos = 0;
        
        for (let i = 0; i < ingresosArray.length; i++) {
            totalIngresos += ingresosArray[i].monto;
        }
    
        for (let i = 0; i < gastosArray.length; i++) {
            totalGastos += gastosArray[i].monto;
        }
    
        let saldoTotal = totalIngresos - totalGastos;
    
        return saldoTotal;
    }

function mostrarGastos(){
    console.log("Gastos")
    console.table(gastosArray)
}
function mostrarIngresos(){
    console.log("Ingresos")
    console.table(ingresosArray)
}


    function mostarResumen(){
        console.log("Resumen de Finanzas Personales")
        console.log("Ingresos totales: $" + ingresosArray.reduce((acc, ingreso) => acc + ingreso.monto, 0))
        console.log("Gastos Totales: $" + gastosArray.reduce((acc, gasto) => acc + gasto.monto, 0))
        console.log("Saldo Disponible: $" +calcularSaldoTotal())
        
    }
    let token= confirm("Quiere añadir un nuevo ingreso")
    if(token==true){
        agregarIngreso()
}
    let token2=confirm("Quiere añadir un nuevo gasto")
if(token2==true){
    agregarGasto()
    
}
    let token3= confirm("Desea ver sus gastos")
    if(token3==true){
        mostrarGastos()
    }
    let token4= confirm("Desea ver sus Ingresos")
    if(token4==true){
        mostrarIngresos()
    }

    mostarResumen()