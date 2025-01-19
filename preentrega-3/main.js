
//PRODUCTOS PREDEFINIDOS
let productos = [
    {id:1,name:"Fernet 750cc",price:12000},
    {id:2,name:"Smirnoff 750cc",price:10000},
    {id:3,name:"Quilmes 344cc",price: 1400},
    {id:4,name:"Aperol 700cc", price: 9500}
];

let carrito = [];
const Producto = function(name,price){
    this.id = productos.length + 1;
    this.name = name;
    this.price = price;
}

// Funcion que crea los productos con un SweetAlert
async function createProduct(){
    let name, price;
    const { value: formValues } = await Swal.fire({
        title: "Agregar Producto",
        html: `
          <input placeholder="Nombre del Producto" id="swal-input1" class="swal2-input">
          <input placeholder="Precio del producto" id="swal-input2" class="swal2-input">
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            name = document.getElementById("swal-input1").value,
            price = parseFloat(document.getElementById("swal-input2").value)
          ];
        }
    });
    if (formValues) {
        const newProduct = new Producto(name, price);
        productos.push(newProduct);
        cargarProductos();
    }
}

// Boton de agregar el producto creado
let botonAgregarProducto = document.getElementById("createProduct");
botonAgregarProducto.addEventListener("click", createProduct);

// Funcion que carga el producto en la tabla de stock
function cargarProductos(){
    const tableProducts = document.getElementById('productTableBody');
    tableProducts.innerHTML = '';
    for (const x of productos) {
        const productRow = document.createElement("tr");
        productRow.innerHTML = `
        <th scope="row">${x.id}</th>
        <td>${x.name}</td>
        <td>$${x.price}</td>
        <td>
            <button class="deleteBtn btn btn-danger" data-id="${x.id}">X</button>
            <button class="btn btn-secondary" onclick="agregarAlCarrito(${x.id})">Carrito</button>
        </td>`;
        tableProducts.appendChild(productRow);

        const deleteButtons = document.querySelectorAll('.deleteBtn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = button.getAttribute('data-id');
                deleteProduct(productId);
            });
        });
    }
}

// Funcion para eliminar un producto
function deleteProduct(id) {
    if (confirm("Estas seguro?")) {
        productos = productos.filter(product => product.id != id);
        cargarProductos();
    }
}
cargarProductos();

// Funcion para agregar productos al carrito
function agregarAlCarrito(x) {
    const producto = productos.find(product => product.id === x);

    const productoEnCarrito = carrito.find(p => p.id === producto.id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarCarrito(); 
}

// Funcion para actualizar el carrito
function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito');
    carritoLista.innerHTML = "";

    let total = 0;

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "list-group-item-dark", "ProductLi");

        const inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.value = producto.cantidad;
        inputCantidad.min = 1;
        inputCantidad.classList.add("inputCantidad");

        inputCantidad.addEventListener("input", function() {
            producto.cantidad = parseInt(inputCantidad.value);
            actualizarCarrito(); 
        });

        li.innerHTML = ` <b>Producto</b>  ${producto.name}  <b>Cantidad</b> `;
        li.appendChild(inputCantidad);
        
        const subtotal = producto.price * producto.cantidad;
        total += subtotal;

        const subtotalElement = document.createElement("span");
        subtotalElement.innerHTML = ` <b>Subtotal</b> $${subtotal}    `;
        li.appendChild(subtotalElement);

        const eliminarLista = document.createElement("button");
        eliminarLista.classList.add("btn", "btn-danger");
        eliminarLista.innerHTML = "X";
        eliminarLista.addEventListener("click", function() {
            carrito = carrito.filter(p => p.id !== producto.id);
            actualizarCarrito();
        });
        li.appendChild(eliminarLista);

        carritoLista.appendChild(li);
    });

    const totalElement = document.createElement("p");
    totalElement.innerHTML = `<b>TOTAL</b> $${total}`;
    carritoLista.appendChild(totalElement);
}

// Facturas
let facturas = [];
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

// Boton para generar factura
const botonFactura = document.getElementById("generarFactura")
botonFactura.addEventListener("click", generarFactura)

async function generarFactura() {
    if (carrito.length === 0) {
        Swal.fire("El carrito está vacío");
    } else {
        const { value: formValues } = await Swal.fire({
            title: "Factura",
            html: `
                <input placeholder="Nombre del Cliente" id="swal-input1" class="swal2-input">
                <input placeholder="Método de pago" id="swal-input2" class="swal2-input">
            `,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value
                ];
            }
        });

        
        const nombre = formValues[0];
        const metodoDePago = formValues[1];

        
        const newTicket = new Factura(nombre, metodoDePago);
        facturas.push(newTicket);
        cargarFactura(); 
    }
}

// Cargar las facturas en la tabla 
function cargarFactura() {
    const tableTickets = document.getElementById('ticketsTableBody');
    tableTickets.innerHTML = '';

    for (const x of facturas) {
        const ticketRow = document.createElement("tr");
        ticketRow.innerHTML = `
            <th scope="row">${x.nombre}</th>
            <td>${x.metodoDePago}</td>
            <td>$${x.total}</td>  <!-- Mostrar el total de la factura -->
            <td>#${x.track}</td>
        `;
        tableTickets.appendChild(ticketRow)
    }
}

// Funcion para generar track aleatorio
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
