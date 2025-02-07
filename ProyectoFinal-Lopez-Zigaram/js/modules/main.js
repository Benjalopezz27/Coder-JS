// main.js
// Conectar todos los scripts
document.addEventListener("DOMContentLoaded", function () {
    cargarProductos();
    const botonAgregarProducto = document.getElementById("createProduct");
    botonAgregarProducto.addEventListener("click", createProduct);
    const botonFactura = document.getElementById("generarFactura");
    botonFactura.addEventListener("click", generarFactura);
});


