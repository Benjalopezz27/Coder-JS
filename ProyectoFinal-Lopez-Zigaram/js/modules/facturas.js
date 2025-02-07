let facturas = []

class Factura {
    constructor(nombre, metodoDePago) {
        this.nombre = nombre
        this.metodoDePago = metodoDePago
        this.track = generarStringAleatorio(10)
        this.total = this.calcularTotal()
    }

    calcularTotal() {
        let total = 0;
        carrito.forEach(producto => {
            total += producto.price * producto.cantidad
        })
        return total
    }
}
function simularRetraso(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
function actualizarStock(carrito) {
    carrito.forEach(producto => {
        const productoEnStock = productos.find(p => p.id === producto.id)
        
        if (productoEnStock) {
            
            productoEnStock.stock -= producto.cantidad

            
            if (productoEnStock.stock <= 2) {
                Swal.fire({
                    title: `¡Reponer stock!`,
                    text: `Quedan pocas unidades de ${productoEnStock.name}. Es recomendable reponer el stock.`,
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                })
            }
        }
    })
}
    productos.forEach(producto => {
        localStorage.setItem(producto.id, JSON.stringify(producto))
    })

async function generarFactura() {
    if (carrito.length === 0) {
        Swal.fire("No hay productos seleccionados")
        return
    }

    const inputOptions = {
        "#ff0000": "Tarjeta",
        "#00ff00": "Mercado Pago",
        "#0000ff": "Efectivo"
    };

    
    const { value: formValues } = await Swal.fire({
        title: "Generar Factura",
        html: `
            <input autocomplete="off" placeholder="Nombre del Cliente" id="swal-input1" class="swal2-input">
            <br><br>
            <label>Elige un medio de pago:</label>
            <div id="swal-input2" class="swal2-radio">
                ${Object.entries(inputOptions).map(([color, metodo]) => `
                    <label>
                        <input type="radio" name="metodoDePago" value="${metodo}" class="swal2-input"> ${metodo}
                    </label><br>
                `).join('')}
            </div>
        `,
        focusConfirm: false,
        preConfirm: () => {
            const nombre = document.getElementById("swal-input1").value
            const metodoDePago = document.querySelector('input[name="metodoDePago"]:checked')

            if (!nombre || !metodoDePago) {
                Swal.showValidationMessage("Por favor complete todos los campos.")
                return false
            }

            return [nombre, metodoDePago.value]
        }
    });

    if (formValues) {
        const nombre = formValues[0]
        const metodoDePago = formValues[1]
        const newTicket = new Factura(nombre, metodoDePago)
        facturas.push(newTicket)
        actualizarStock(carrito)
        
        await simularRetraso(3000)

        
        if (metodoDePago === 'Mercado Pago') {
            Swal.fire({
                title: 'Pago con Mercado Pago',
                text: `La factura #${newTicket.track} ha sido generada y el pago se procesó correctamente a través de Mercado Pago.`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            })
        } else if (metodoDePago === 'Tarjeta') {
            Swal.fire({
                title: 'Pago con Tarjeta',
                text: `La factura #${newTicket.track} ha sido generada y el pago con tarjeta se procesó exitosamente.`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            })
        } else if (metodoDePago === 'Efectivo') {
            Swal.fire({
                title: 'Pago en Efectivo',
                text: `La factura #${newTicket.track} ha sido generada y el pago en efectivo ha sido registrado.`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            })
        }
        
        carrito = []
        cargarFactura()
        actualizarCarrito()
    }
}





function cargarFactura() {
    const tableTickets = document.getElementById('ticketsTableBody')
    tableTickets.innerHTML = ''

    for (const x of facturas) {
        const ticketRow = document.createElement("tr");
        ticketRow.innerHTML = `
            <th scope="row">${x.nombre}</th>
            <td>${x.metodoDePago}</td>
            <td>$${x.total}</td>
            <td>#${x.track}</td>
        `
        tableTickets.appendChild(ticketRow)
    }
}

function generarStringAleatorio(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    const caracteresLength = caracteres.length;

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresLength);
        resultado += caracteres.charAt(indiceAleatorio);
    }

    return resultado;
}
