let carrito = []

function agregarAlCarrito(x) {
    const producto = productos.find(product => product.id === x)

    const productoEnCarrito = carrito.find(p => p.id === producto.id)
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarCarrito()
}

function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito')
    carritoLista.innerHTML = ""

    let total = 0

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "list-group-item-dark", "ProductLi");

        const inputCantidad = document.createElement("input")
        inputCantidad.type = "number"
        inputCantidad.value = producto.cantidad
        inputCantidad.min = 1
        inputCantidad.classList.add("inputCantidad")

        inputCantidad.addEventListener("input", function () {
            producto.cantidad = parseInt(inputCantidad.value);
            actualizarCarrito()
        })

        li.innerHTML = ` <b>Producto</b>  ${producto.name}  <b>Cantidad</b> `;
        li.appendChild(inputCantidad)

        const subtotal = producto.price * producto.cantidad;
        total += subtotal

        const subtotalElement = document.createElement("span");
        subtotalElement.innerHTML = ` <b>Subtotal</b> $${subtotal}    `
        li.appendChild(subtotalElement)

        const eliminarLista = document.createElement("button")
        eliminarLista.classList.add("btn", "btn-danger")
        eliminarLista.innerHTML = "X"
        eliminarLista.addEventListener("click", function () {
            carrito = carrito.filter(p => p.id !== producto.id)
            actualizarCarrito();
        })
        li.appendChild(eliminarLista)

        carritoLista.appendChild(li)
    })

    const totalElement = document.createElement("p")
    totalElement.innerHTML = `<b>TOTAL</b> $${total}`
    carritoLista.appendChild(totalElement)

}